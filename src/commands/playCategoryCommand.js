const { Markup } = require("telegraf");
const loadData = require("../utils/loadData");
const { playCommand } = require("./playCommand");

const clinicalCases = loadData("clinicalCase.json");

function playCategoryCommand(ctx) {
  const specialties = [...new Set(clinicalCases.map((c) => c.specialty))];

  const specialtyButtons = specialties.map((specialty) =>
    Markup.button.callback(specialty, `specialty:${specialty}`)
  );

  const keyboard = Markup.inlineKeyboard(specialtyButtons, { columns: 2 });

  ctx.reply("Elige una especialidad:", keyboard);
}

async function handleSpecialtySelection(ctx) {
  const selectedSpecialty = ctx.update.callback_query.data.split(":")[1];
  ctx.session.currentSpecialty = selectedSpecialty;

  await playCommand(ctx);
}


module.exports = {playCategoryCommand, handleSpecialtySelection};
