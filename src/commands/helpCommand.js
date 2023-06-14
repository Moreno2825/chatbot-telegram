function helpCommand(ctx){
    ctx.reply("Bienvenido al comando de ayuda");
    ctx.reply("Para poder jugar, existen dos modos de juegos: aleatorio y modo por categoria. \n\nPara comenzar partida /play.\n\nPara reiniciar la partida /restart.\n\nPara conocer quienes somos /info.")
}
module.exports = helpCommand;