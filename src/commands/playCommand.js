const { Markup } = require("telegraf");
const loadData = require("../utils/loadData");

const clinicalCases = loadData("clinicalCase.json");

const usedQuestions = new Set();

function getRandomQuestion() {
  const availableClinicalQuestions = clinicalCases.filter(
    (clinicalCase) => !usedQuestions.has(clinicalCase.id)
  );

  if (availableClinicalQuestions.length === 0) {
    return null;
  }

  const randomCaseIndex = Math.floor(Math.random() * availableClinicalQuestions.length);
  const { id, question: questions} = availableClinicalQuestions[randomCaseIndex];
  const randomQuestionIndex = Math.floor(
    Math.random() * questions.length
  );
  const question = questions[randomQuestionIndex];

  usedQuestions.add(id);

  return { clinicalCase: {id, question: questions}, question };
}


function playCommand(ctx) {
  const result = getRandomQuestion();

  if (result === null) {
    ctx.reply(
      `¡Has respondido todas las preguntas disponibles! \n-Puedes reiniciar el juego usando /restart.\n\nTus resultados actuales son:\nRespuestas correctas: ${ctx.session.correctCount}\nRespuestas incorrectas: ${ctx.session.incorrectCount}`
    );
    return;
  }

  const { question } = result;

  ctx.session.question = question;
  ctx.session.correctAnswer = question.correctAnswer;

  let message = `Pregunta: ${question.text}\n\nRespuestas:\n`;
  question.answers.forEach((answer, index) => {
    message += `${String.fromCharCode(65 + index)}) ${answer.text}\n`;
  });

  const keyboard = Markup.inlineKeyboard(
    question.answers.map((answer, index) =>
      Markup.button.callback(String.fromCharCode(65 + index), answer.id)
    )
  )

  ctx.reply(message, keyboard);
}

function resetCommand(ctx) {
  usedQuestions.clear();
  ctx.session.correctCount = 0;
  ctx.session.incorrectCount = 0;
  ctx.reply(
    "Al parecer quieres volver a reiniciar el juego y comprobar tu inteligencia conmigo\n Presione /play"
  );
}

module.exports = { playCommand, resetCommand };
