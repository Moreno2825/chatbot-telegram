const fs = require("fs");
const { Markup } = require("telegraf");
const loadData = require("../utils/loadData");

const clinicalCases = loadData("clinicalCase.json");

let currentCase = null;
let currentCaseQuestions = [];
const usedQuestions = new Set();
let generalFeedbacks = [];
const gifPath = "public/congratulations.gif";
const sadDuckSticker =
  "CAACAgIAAxkBAAO1ZJR3dmueEa_SiDw90555s_FN0ZkAAvMAA1advQpqG-vEx_qW_i8E";
const happyDuckSticker =
  "CAACAgIAAxkBAAO2ZJR4SmWEEYhAJummR5hPP5XG-QkAAvcAA1advQoLciQdSPQNMC8E";

function getAvailableClinicalCases(ctx) {
  return clinicalCases.filter(
    ({ id, speciality }) =>
      !usedQuestions.has(id) &&
      (ctx.session.currentSpeciality == null ||
        speciality === ctx.session.currentSpeciality)
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

    const { id, question, feedbackGeneral } = currentCase;
    currentCaseQuestions = [...question];

    usedQuestions.add(id);
    generalFeedbacks.push(feedbackGeneral);
  }

  const question = currentCaseQuestions.shift();
  return { clinicalCase: currentCase, question };
}

async function playCommand(ctx) {
  const result = getRandomQuestion(ctx);
  const keyboardRestart = Markup.inlineKeyboard([
    Markup.button.callback(
      "Presiona aqui, para regresar al menú",
      "restartCommand"
    ),
  ]);

  if (result === null) {
    let finalMessage = `¡Has respondido todas las preguntas disponibles!\n\n*✅ Respuestas correctas: ${ctx.session.correctCount}\n❌ Respuestas incorrectas: ${ctx.session.incorrectCount}*`;

    if (ctx.session.correctCount > ctx.session.incorrectCount) {
      finalMessage +=
        "\n\n¡Has logrado tener un buen puntuaje, sigue mejorando, para aprobar tu examen mucho exito!🏋🏻🎉🎉";
    } else if (ctx.session.correctCount < ctx.session.incorrectCount) {
      finalMessage += "\n\nSigue intentandolo, puedes mejorar.";
    }

    generalFeedbacks.forEach((feedback, index) => {
      finalMessage += `\n\n*${index + 1}* - _${feedback}_`;
    });

    await ctx.replyWithMarkdown(finalMessage, keyboardRestart);

    if (ctx.session.correctCount > ctx.session.incorrectCount) {
      await ctx.replyWithSticker(happyDuckSticker);
    } else if (ctx.session.correctCount < ctx.session.incorrectCount) {
      await ctx.replyWithSticker(sadDuckSticker);
    }
    return;
  }

  const { clinicalCase, question } = result;

  ctx.session.question = question;
  ctx.session.correctAnswer = question.correctAnswer;

  if (ctx.session.lastCase !== clinicalCase.id) {
    let messageCase = `*Caso clinico:* ${clinicalCase.case} \n\n`;
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

  await ctx.reply(message, keyboard);
}

function restartCommand(ctx) {
  ctx.session.lastCase = null;
  generalFeedbacks = [];
  usedQuestions.clear();
  ctx.session.correctCount = 0;
  ctx.session.incorrectCount = 0;
  ctx.session.currentSpeciality = null;

  const keyboard = Markup.inlineKeyboard([
    Markup.button.callback("Aleatorio", "playCommand"),
    Markup.button.callback("Categoria", "playCategoryCommand"),
    Markup.button.callback("Salir", "exitCommand"),
  ]);

  ctx.replyWithMarkdown("*Elige el modo de juego que deseas jugar:*", keyboard);
}

module.exports = { playCommand, restartCommand };
