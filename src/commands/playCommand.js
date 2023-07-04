const { Markup } = require("telegraf");
const { clinicalCases } = require("../constant.js");

let currentCase = null;
let currentCaseQuestions = [];
const usedQuestions = new Set();
let generalFeedbacks = [];
const sadDuckSticker =
  "CAACAgIAAxkBAAO1ZJR3dmueEa_SiDw90555s_FN0ZkAAvMAA1advQpqG-vEx_qW_i8E";
const happyDuckSticker =
  "CAACAgIAAxkBAAO2ZJR4SmWEEYhAJummR5hPP5XG-QkAAvcAA1advQoLciQdSPQNMC8E";

function getAvailableClinicalCases(ctx) {
  return Object.values(clinicalCases).filter(
    ({ id, speciality, subSpeciality }) =>
      !usedQuestions.has(id) &&
      (ctx.session.currentSpeciality == null ||
        speciality === ctx.session.currentSpeciality) &&
      (ctx.session.currentSubSpeciality == null ||
        subSpeciality === ctx.session.currentSubSpeciality)
  );
}

function selectRandomCase(ctx) {
  const availableClinicalCases = getAvailableClinicalCases(ctx);

  if (availableClinicalCases.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * availableClinicalCases.length);
  return availableClinicalCases[randomIndex];
}

function getRandomQuestion(ctx) {
  if (currentCaseQuestions.length === 0) {
    currentCase = selectRandomCase(ctx);
    if (currentCase === null) {
      return null;
    }

    const { id, question, feedbackGeneral, book } = currentCase;
    currentCaseQuestions = [...question];

    usedQuestions.add(id);
    generalFeedbacks.push({ feedback: feedbackGeneral, book });
  }

  const question = currentCaseQuestions.shift();
  return { clinicalCase: currentCase, question };
}

async function playCommand(ctx) {
  const result = getRandomQuestion(ctx);
  const keyboardRestart = Markup.inlineKeyboard([
    Markup.button.callback(
      "Presiona aquí para regresar al menú",
      "restartCommand"
    ),
  ]);

  if (result === null) {
    let finalMessage = `¡Has respondido todas las preguntas disponibles!\n\n*✅ Respuestas correctas: ${ctx.session.correctCount} *\n❌*Respuestas incorrectas: ${ctx.session.incorrectCount}*`;

    const totalAnswers = ctx.session.correctCount + ctx.session.incorrectCount;
    const precision = (ctx.session.correctCount / totalAnswers ) * 100;

    finalMessage += `\n\n*Presición: ${precision.toFixed(2)}%*`;

    if (ctx.session.correctCount > ctx.session.incorrectCount) {
      finalMessage += "\n\n¡Has logrado obtener una buena puntuación! ¡Sigue mejorando y mucho éxito en tu examen! 🏋🏻🎉🎉";
    } else if (ctx.session.correctCount < ctx.session.incorrectCount) {
      finalMessage += "\n\nSigue intentándolo, puedes mejorar.";
    } else {
      finalMessage += "\n\nVaya tu puntuación quedo igual, animate a intentarlo de nuevo!"
    }

    generalFeedbacks.forEach(({ feedback, book }, index) => {
      finalMessage += `\n\n${index + 1} - ${feedback}\n\nPara más información, consulta el libro: ${book}`;
    });

    await ctx.replyWithMarkdown(finalMessage, keyboardRestart);

    if (ctx.session.correctCount > ctx.session.incorrectCount) {
      await ctx.replyWithSticker(happyDuckSticker);
    } else if (ctx.session.correctCount < ctx.session.incorrectCount) {
      await ctx.replyWithSticker(sadDuckSticker);
    }

    ctx.session.state = "finished";
    return;
  }

  const { clinicalCase, question } = result;

  ctx.session.question = question;
  ctx.session.correctAnswer = question.correctAnswer;

  if (ctx.session.lastCase !== clinicalCase.id) {
    let messageCase = `*Caso clínico:* ${clinicalCase.case} \n\n`;
    await ctx.replyWithMarkdown(messageCase);
    ctx.session.lastCase = clinicalCase.id;
  }

  let message = `Pregunta: ${question.text}\n\nRespuestas:\n`;
  question.answers.forEach((answer, index) => {
    message += `${String.fromCharCode(65 + index)}) ${answer.text}\n`;
  });

  const keyboard = Markup.inlineKeyboard(
    question.answers.map((answer, index) =>
      Markup.button.callback(
        String.fromCharCode(65 + index),
        "answer_" + answer.id
      )
    )
  );

  setTimeout(async () => {
    await ctx.reply(message, keyboard);
  }, 1500);

  ctx.session.state = "awaiting";
}

function restartCommand(ctx) {
  ctx.session.lastCase = null;
  generalFeedbacks = [];
  usedQuestions.clear();
  ctx.session.correctCount = 0;
  ctx.session.incorrectCount = 0;
  ctx.session.currentSpeciality = null;
  ctx.session.currentSubSpeciality = null;

  const keyboard = Markup.inlineKeyboard([
    Markup.button.callback("Aleatorio", "playCommand"),
    Markup.button.callback("Categoría", "playCategoryCommand"),
    Markup.button.callback("Salir", "exitCommand"),
  ]);

  ctx.replyWithMarkdown("*Elige el modo de juego que deseas jugar:*", keyboard);
}
module.exports = { playCommand, restartCommand };