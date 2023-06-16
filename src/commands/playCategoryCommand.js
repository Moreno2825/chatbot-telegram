const { Markup } = require("telegraf");
const loadData = require("../utils/loadData");

const clinicalCases = loadData("clinicalCase.json");

function playCategoryCommand(ctx) {
    const specialties = clinicalCases.map((c) => c.specialty);
  
    const specialtyButtons = specialties.map((specialty) =>
      Markup.button.callback(specialty, `specialty:${specialty}`)
    );
  
    const keyboard = Markup.inlineKeyboard(specialtyButtons, { columns: 2 });
  
    ctx.reply("Elige una especialidad:", keyboard);
  }
  
  module.exports = playCategoryCommand;