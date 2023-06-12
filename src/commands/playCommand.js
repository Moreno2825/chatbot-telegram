const { Markup } = require("telegraf");
const loadData = require("../utils/loadData");

const clinicalCases = loadData("clinicalCase.json");

const usedQuestions = new Set();

function getRandomQuestion() {
  const availableQuestions = clinicalCases.filter(
    (c) => !usedQuestions.has(c.id)
  );

  if (availableQuestions.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const clinicalCase = availableQuestions[randomIndex];
  const randomQuestionIndex = Math.floor(
    Math.random() * clinicalCase.question.length
  );
  const question = clinicalCase.question[randomQuestionIndex];

  usedQuestions.add(clinicalCase.id);

  return { clinicalCase, question };
}

function playCommand(ctx) {
  const result = getRandomQuestion();

  if (result === null) {
    ctx.reply(
      "¡Has respondido todas las preguntas disponibles! \n-Puedes reiniciar el juego usando /restart "
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
  ctx.reply(
    "Al parecer quieres volver a reiniciar el juego y comprobar tu inteligencia conmigo\n Presione /play"
  );
}

module.exports = { playCommand, resetCommand };
