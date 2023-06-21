async function exitCommand(ctx) {
    const duckSticker =
    "CAACAgIAAxkBAAIHtGSKE_IaUza2-_n8XP4eV8MF9fa6AAL-AANWnb0K2gRhMC751_8vBA";
    ctx.session = null;
    await ctx.reply("Gracias por haber usado nuestro Chatbot para estudiar en tus examenes ENARM.\n¡Hasta ahora!");
    await ctx.replyWithSticker(duckSticker);

}
module.exports = exitCommand;