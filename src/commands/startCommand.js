const fs = require("fs");
function startCommand(ctx) {
  const gifPath = "public/welcome_opt.gif";
  const question = {};

  ctx.session??={};
  ctx.reply(
    "Bienvenido a Maestro ENARM bot ¿Quieres estudiar a base de un quiz?\n- Presione /play"
  );
  ctx.replyWithAnimation({ source: fs.createReadStream(gifPath) });
}
module.exports = startCommand;
