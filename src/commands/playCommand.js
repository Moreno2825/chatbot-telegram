const { Markup } = require("telegraf");
const { clinicalCases } = require("../constant.js");
const admin = require("firebase-admin");
const db = require("../utils/firebase.js");

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

function calculatePrecision(correctCount, incorrectCount) {
  const totalAnswers = correctCount + incorrectCount;
  const precision = (correctCount / totalAnswers) * 100;
  return precision;
}

function getPrecisionMessage(precision) {
  let message = "";
  if (precision > 80) {
    message =
      "\n\n¡Felicidades🎉🥳! 🎯Tu precision es mayor al 80%. Sigue estudiando y lograrás pasar el examen ENARM";
  } else {
    message =
      "\n\nTu precisión es menor al 80%😢❌. Te recomendamos practicar más para mejorar, visita nuestra pagina Maestro Enarm Academy";
  }
  return message;
}

async function storeStatistics(ctx) {
  const user_id = ctx.from.id;
  const precision = calculatePrecision(
    ctx.session.correctCount,
    ctx.session.incorrectCount
  );
  const userRef = db.collection("users").doc(String(user_id));

  const userData = {
    correctCount: ctx.session.correctCount,
    incorrectCount: ctx.session.incorrectCount,
    precision: precision,
    session: false,
  };
  await userRef.set(userData, { merge: true });
}

async function stadisticCommand(ctx) {
  const user_id = ctx.from.id;
  const userRef = db.collection("users").doc(String(user_id));

  ctx.reply(
    `Bienvenido ${ctx.from.first_name}!😎👍, Analizare la base de datos para ver tus estadisticas`
  );

  setTimeout(async () => {
    try {
      const snapshot = await userRef.get();
      if (snapshot.exists) {
        const { precision, correctCount, incorrectCount } = snapshot.data();

        let message = `📊👩🏻‍⚕️Tus estadísticas son👨🏻‍⚕️:\n\n✅Respuestas correctas: ${correctCount}\n❌Respuestas incorrectas: ${incorrectCount}\n🎯Con una precisión de: ${precision}%`;
        message += getPrecisionMessage(precision);
        ctx.reply(message);
      } else {
        ctx.reply("No se encontraron estadísticas para este usuario.");
      }
    } catch (error) {
      ctx.reply(
        "Ocurrio un error al obtener las estadísticas. Por favor, intentalo más tarde"
      );
    }
  }, 3000);
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
    const MAX_MESSAGE_LENGTH = 4096;
    let currentMessage = "";
    const messagesToSend = [];

    let finalMessage = `¡Has respondido todas las preguntas disponibles!\n\n*✅ Respuestas correctas: ${ctx.session.correctCount} *\n❌*Respuestas incorrectas: ${ctx.session.incorrectCount}.\n Se ha actualizado de manera correcta tu nuevo puntuaje a la base de datos 📚✅*`;

    const precision = calculatePrecision(
      ctx.session.correctCount,
      ctx.session.incorrectCount
    );

    finalMessage += `\n\n*Presición: ${precision.toFixed(2)}%*`;

    finalMessage += getPrecisionMessage(precision);

    generalFeedbacks.forEach(({ feedback, book }, index) => {
      const feedbackText = `\n\n${index + 1} - ${feedback}\n\nPara más información, consulta el libro📚: ${book}`;
      if ((currentMessage + feedbackText).length > MAX_MESSAGE_LENGTH) {
        messagesToSend.push(currentMessage);
        currentMessage = feedbackText;
      } else {
        currentMessage += feedbackText;
      }
    });

    if (currentMessage.length > 0) {
      messagesToSend.push(currentMessage);
    }

    for (const message of messagesToSend) {
      await ctx.reply(message, keyboardRestart);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }


    await ctx.replyWithMarkdown(finalMessage, keyboardRestart);

    if (ctx.session.correctCount > ctx.session.incorrectCount) {
      await ctx.replyWithSticker(happyDuckSticker);
    } else if (ctx.session.correctCount < ctx.session.incorrectCount) {
      await ctx.replyWithSticker(sadDuckSticker);
    }

    await storeStatistics(ctx);

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

  ctx.replyWithMarkdown(
    "*🎮🏅 Elige el modo de juego que deseas jugar:*",
    keyboard
  );
}
module.exports = { playCommand, restartCommand, stadisticCommand };
