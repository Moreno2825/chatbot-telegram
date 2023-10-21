require("dotenv").config();
const fs = require("fs");
const { Telegraf, session, Markup, Scenes } = require("telegraf");
const {
  playCommand,
  restartCommand,
  stadisticCommand,
} = require("./commands/playCommand");
const helpCommand = require("./commands/helpCommand");
const infoCommand = require("./commands/infoCommand");
const {
  playCategoryCommand,
  handleSpecialitySelection,
  handleSubSpecialitySelection,
} = require("./commands/playCategoryCommand");
const { correctGifts, incorrectGifts } = require("./constant");
const exitCommand = require("./commands/exitCommand");
const db = require("./utils/firebase");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(session());

const playScene = new Scenes.BaseScene("playScene");

playScene.command("play", (ctx) => {
  if (ctx.session.started) {
    playCommand(ctx);
  } else {
    ctx.reply("Por favor, primero inicia el boton con /start");
  }
});

const stage = new Scenes.Stage([playScene]);
bot.use(stage.middleware());

async function startCommand(ctx) {
  ctx.session.started = true;
  const user_id = ctx.from.id;
  const userRef = db.collection("users").doc(String(user_id));
  const doc = await userRef.get();

  const hasPaid =
    doc.exists &&
    Array.isArray(doc.data().payments) &&
    doc.data().payments.length > 0;

  const keyboard = Markup.inlineKeyboard([
    Markup.button.callback("Modo Aleatorio", "playCommand"),
    Markup.button.callback("Modo por Categoria", "playCategoryCommand"),
  ]);

  if (!hasPaid) {
    await ctx.reply(
      `Bienvenido a Maestro ENARM Chatbot ${ctx.from.first_name} \nPara poder utilizar este bot, necesitas realizar un pago de 100 pesos. Una vez hecho el pago, podrás disfrutar de todas las funcionalidades de este bot.`
    );

    ctx.replyWithInvoice({
      title: "Maestro ENARM Chatbot",
      description: "Chatbot",
      payload: "282512SAD",
      provider_token: process.env.TOKEN_STRIPE,
      currency: "MXN",
      prices: [{ label: "Maestro ENARM Chatbot", amount: 10000 }],
    });
  } else {
    // Si el usuario ya ha pagado, se le muestra la funcionalidad del bot
    if (!doc.exists || (doc.exists && doc.data().session === undefined)) {
      await userRef.set({ session: true }, { merge: true });
      await ctx.reply(
        `Bienvenido a Maestro ENARM Chatbot ${ctx.from.first_name} \nImaginate estar preparado para el examen de ENARM y pasar con buena calificación💯\n¿Estaria cool no?😎.\nEsto lo puedes hacer mediante este chatbot donde puedes estudiar a través de telegram en cualquier lugar y comodidad\nPara eso te traigo dos modos de juegos el modo aleatorio que son casos clinicos aleatorios de cualquier especialidad o el modo por especialidad para centrarte en una sola y reforzar\nElige el que mejor te convenga y desafia tus habilidades con Maestro Enarm Chatbot😁👍`,
        keyboard
      );
    } else {
      const userStadistics = doc.data();
      await ctx.reply(
        `¡Hola ${
          ctx.from.first_name
        }!😎👍, gracias por visitarnos de nuevo, vamos a probar tu inteligencia de nuevo. ¿Podras llegar al 100%?💯✅ Tus estadisticas anteriores son:\n\n ✅Respuestas correctas: ${
          userStadistics.correctCount
        }\n ❌Respuestas incorrectas: ${
          userStadistics.incorrectCount
        }\n\n Precisión: ${userStadistics.precision.toFixed(2)}%`,
        keyboard
      );
    }

    const gifPath = "public/welcome_opt.gif";

    ctx.session ??= {};

    await ctx.replyWithAnimation({ source: fs.createReadStream(gifPath) });
  }
}

bot.action("restartCommand", async (ctx) => {
  await ctx.answerCbQuery();
  restartCommand(ctx);
});

bot.action("playCommand", async (ctx) => {
  await ctx.answerCbQuery();
  playCommand(ctx);
});

bot.action("playCategoryCommand", async (ctx) => {
  await ctx.answerCbQuery();
  playCategoryCommand(ctx);
});

bot.action("exitCommand", async (ctx) => {
  await ctx.answerCbQuery();
  exitCommand(ctx);
});

bot.action(/answer_(\d+)/, async (ctx) => {
  const selectedAnswer = parseInt(ctx.match[1]);
  const isAnswerCorrect = selectedAnswer === ctx.session.correctAnswer;

  ctx.session.correctCount = ctx.session.correctCount ?? 0;
  ctx.session.incorrectCount = ctx.session.incorrectCount ?? 0;

  if (isAnswerCorrect) {
    ctx.session.correctCount++;
  } else {
    ctx.session.incorrectCount++;
  }

  const feedback = isAnswerCorrect
    ? "😎." + ctx.session.question.answers[selectedAnswer - 1]?.answer
    : "😢. " + ctx.session.question.answers[selectedAnswer - 1]?.answer;

  await ctx.reply(feedback);

  const gif = isAnswerCorrect
    ? correctGifts[Math.floor(Math.random() * correctGifts.length)]
    : incorrectGifts[Math.floor(Math.random() * incorrectGifts.length)];

  await ctx.replyWithAnimation({ source: fs.createReadStream(gif) });

  if (!isAnswerCorrect) {
    await ctx.reply(`${ctx.session.question.feedbackQuestion}`);
  }

  if (ctx.session.state === "awaiting") {
    ctx.session.state = "responded";
    setTimeout(() => {
      playCommand(ctx);
    }, 1800);
  }
});

bot.action(/speciality:(.+)/, async (ctx) => {
  await ctx.answerCbQuery();
  handleSpecialitySelection(ctx);
});

bot.action(/subSpeciality:(.+)/, async (ctx) => {
  await ctx.answerCbQuery();
  handleSubSpecialitySelection(ctx);
});

bot.hears("Hola", (ctx) => {
  ctx.reply(
    `Hey hola ${ctx.from.first_name} ¿Como estás?, quieres volver a jugar presiona /start`
  );
});

bot.command("start", startCommand);
bot.command("play", playCommand);
bot.command("speciality", playCategoryCommand);
bot.command("restart", restartCommand);
bot.command("stadistic", stadisticCommand);
bot.command("pay", (ctx) => {
  ctx.replyWithInvoice({
    title: "Maestro ENARM Chatbot",
    description: "Chatbot",
    payload: "282512SAD",
    provider_token: process.env.TOKEN_STRIPE,
    currency: "MXN",
    prices: [{ label: "Maestro ENARM Chatbot", amount: 10000 }],
  });
});

bot.on("pre_checkout_query", async (ctx) => {
  try {
    await ctx.answerPreCheckoutQuery(true);
  } catch (e) {
    console.log("Error en pre_checkout_query:", e);
  }
});

bot.on("successful_payment", async (ctx) => {
  try {
    const payment = ctx.update.message.successful_payment;
    const user_id = ctx.from.id;

    const userRef = db.collection("users").doc(String(user_id));

    const userDoc = await userRef.get();
    let userData;
    if (userDoc.exists) {
      userData = userDoc.data();
    } else {
      userData = {};
    }

    userData.payments = userData.payments || [];
    userData.payments.push({
      date: new Date(),
      amount: payment.total_amount / 100,
      receipt: payment.invoice_payload,
    });
    await userRef.set(userData, { merge: true });
    ctx.reply("¡Pago exitoso! Gracias por tu compra.💸🛍️");
    startCommand(ctx);
  } catch (e) {
    console.log("Error al guardar el pago:", e);
    ctx.reply("Ocurrió un error, por favor intenta de nuevo.");
  }
});

bot.command("exit", exitCommand);
bot.command("help", helpCommand);
bot.command("info", infoCommand);

bot.launch();
