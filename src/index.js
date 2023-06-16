require("dotenv").config();
const fs = require("fs");
const { Telegraf, session, Markup } = require("telegraf");
const { playCommand, restartCommand } = require("./commands/playCommand");
const helpCommand = require("./commands/helpCommand");
const infoCommand = require("./commands/infoCommand");
const {playCategoryCommand, handleSpecialtySelection} = require("./commands/playCategoryCommand");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(session());

bot.start((ctx) => {
  const gifPath = "public/welcome_opt.gif";
  const keyboard = Markup.inlineKeyboard([
    Markup.button.callback("Presiona para jugar", "playCommand"),
  ]);

  ctx.session ??= {};

  ctx.reply(`Bienvenido a Maestro ENARM bot ${ctx.from.first_name}.`, keyboard);
  ctx.replyWithAnimation({ source: fs.createReadStream(gifPath) });
});

bot.action("restartCommand", async (ctx) => {
  await ctx.answerCbQuery();
  restartCommand(ctx);
})

bot.action("playCommand", async (ctx) => {
  await ctx.answerCbQuery();
  playCommand(ctx);
})

bot.action(/\d+/, async (ctx) => {
  const selectedAnswer = parseInt(ctx.match[0]);
  const isAnswerCorrect = selectedAnswer === ctx.session.correctAnswer;

  ctx.session.correctCount = ctx.session.correctCount ?? 0;
  ctx.session.incorrectCount = ctx.session.incorrectCount ?? 0;

  if (isAnswerCorrect) {
    ctx.session.correctCount++;
  } else{
    ctx.session.incorrectCount++;
  }
  
  const feedback = isAnswerCorrect
    ? "😎." + ctx.session.question.answers[selectedAnswer - 1]?.answer
    : "😢. " + ctx.session.question.answers[selectedAnswer - 1]?.answer;

  await ctx.reply(feedback);
  playCommand(ctx);
});

bot.action(/specialty:(.+)/, async (ctx) => {
  await ctx.answerCbQuery();
  handleSpecialtySelection(ctx);
});

bot.command("play", playCommand);
bot.command("specialty", playCategoryCommand);
bot.command("restart", restartCommand);
bot.command("help", helpCommand);
bot.command("info", infoCommand);

bot.launch();
