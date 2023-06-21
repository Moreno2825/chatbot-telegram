require("dotenv").config();
const fs = require("fs");
const { Telegraf, session, Markup } = require("telegraf");
const { playCommand, restartCommand } = require("./commands/playCommand");
const helpCommand = require("./commands/helpCommand");
const infoCommand = require("./commands/infoCommand");
const {
  playCategoryCommand,
  handleSpecialitySelection,
} = require("./commands/playCategoryCommand");
const { correctGifts, incorrectGifts } = require("./constant");
const exitCommand = require("./commands/exitCommand");

function escape(str) {
  return str.replace(/[_*[\]()~`>#+-=|{}.!]/g, '\\$&');
}

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(session());

bot.start(async (ctx) => {
  const gifPath = "public/welcome_opt.gif";
  const keyboard = Markup.inlineKeyboard([
    Markup.button.callback("Modo Aleatorio", "playCommand"),
    Markup.button.callback("Modo por Categoria", "playCategoryCommand"),
  ]);

  ctx.session ??= {};

  await ctx.reply(
    `Bienvenido a Maestro ENARM Chatbot ${ctx.from.first_name} \nImaginate estar preparado para el examen de ENARM y pasar con buena calificación💯\n¿Estaria cool no?😎.\nEsto lo puedes hacer mediante este chatbot donde puedes estudiar a través de telegram en cualquier lugar y comodidad\nPara eso te traigo dos modos de juegos el modo aleatorio que son casos clinicos aleatorios de cualquier especialidad o el modo por especialidad para centrarte en una sola y reforzar\nElige el que mejor te convenga y desafia tus habilidades con Maestro Enarm Chatbot😁👍`,
    keyboard
  );
  await ctx.replyWithAnimation({ source: fs.createReadStream(gifPath) });
});

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
})

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

  await ctx.replyWithAnimation({source: fs.createReadStream(gif)});

  if (!isAnswerCorrect) {
    await ctx.replyWithMarkdownV2(`*${escape(ctx.session.question.feedbackQuestion)}*`);
  }
  await playCommand(ctx);
});

bot.action(/speciality:(.+)/, async (ctx) => {
  await ctx.answerCbQuery();
  handleSpecialitySelection(ctx);
});

bot.command("play", playCommand);
bot.command("speciality", playCategoryCommand);
bot.command("restart", restartCommand);
bot.command("exit", exitCommand);
bot.command("help", helpCommand);
bot.command("info", infoCommand);

bot.launch();
