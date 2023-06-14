const fs = require("fs");
const { Markup } = require("telegraf");
const loadData = require("../utils/loadData");
const { error } = require("console");

const clinicalCases = loadData("clinicalCase.json");

const usedQuestions = new Set();
let generalFeedbacks = [];
const gifPath = "public/congratulations.gif";

function getRandomQuestion() {
  const availableClinicalQuestions = clinicalCases.filter(
    (c) => !usedQuestions.has(c.id)
  );

  if (availableClinicalQuestions.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(
    Math.random() * availableClinicalQuestions.length
  );
  const clinicalCase = availableClinicalQuestions[randomIndex];
  const randomQuestionIndex = Math.floor(
    Math.random() * clinicalCase.question.length
  );
  const question = clinicalCase.question[randomQuestionIndex];

  usedQuestions.add(clinicalCase.id);
  generalFeedbacks.push(clinicalCase.feedback);

  return { clinicalCase, question };
}

function playCommand(ctx) {
  const result = getRandomQuestion();
  const keyboardRestart = Markup.inlineKeyboard([
    Markup.button.callback("Presione para reinciar el juego", "restartCommand"),
  ]);

  if (result === null) {
    let finalMessage = `¡Has respondido todas las preguntas disponibles!\n\n*✅ Respuestas correctas: ${ctx.session.correctCount}\n❌ Respuestas incorrectas: ${ctx.session.incorrectCount}*`;

    if (ctx.session.correctCount > ctx.session.incorrectCount) {
      finalMessage +=
        "\n\n¡Has logrado tener un buen puntuaje, sigue mejorando, para aprobar tu examen mucho exito!🏋🏻🎉🎉";
      ctx.replyWithAnimation({source: fs.createReadStream(gifPath)}).catch(error  => console.log(`Erro al enviar el gif ${error.message}`));
    } else if (ctx.session.correctCount < ctx.session.incorrectCount) {
      finalMessage += "\n\nSigue intentandolo, puedes mejorar.";
    }

    generalFeedbacks.forEach((feedback, index) => {
      finalMessage += `\n\n*${index + 1}* - _${feedback}_`;
    });

    ctx.replyWithMarkdown(finalMessage, keyboardRestart);
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
  );

  ctx.reply(message, keyboard);
}

function restartCommand(ctx) {
  usedQuestions.clear();
  ctx.session.correctCount = 0;
  ctx.session.incorrectCount = 0;

  const keyboard = Markup.inlineKeyboard([
    Markup.button.callback("Presione para jugar", "playCommand"),
  ]);

  ctx.reply(
    "Al parecer quieres volver a reiniciar el juego y comprobar tu inteligencia conmigo",
    keyboard
  );
}

module.exports = { playCommand, restartCommand };
