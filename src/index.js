require("dotenv").config();
const { Telegraf, session } = require("telegraf");
const startCommand = require("./commands/startCommand");
const { playCommand, resetCommand } = require("./commands/playCommand");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(session());

bot.action(/\d+/, async (ctx) => {
  const selectedAnswer = parseInt(ctx.match[0]);
  const isAnswerCorrect = selectedAnswer === ctx.session.correctAnswer;

  const feedback = isAnswerCorrect
    ? "😎." + ctx.session.question.answers[selectedAnswer - 1]?.feedback
    : "😢. " + ctx.session.question.answers[selectedAnswer - 1]?.feedback;

  await ctx.reply(feedback);
  playCommand(ctx);
});

bot.command("start", startCommand);
bot.command("play", playCommand);
bot.command("restart", resetCommand);

bot.launch();
