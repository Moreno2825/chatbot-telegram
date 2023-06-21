const { Markup } = require("telegraf");
const loadData = require("../utils/loadData");
const { playCommand } = require("./playCommand");

const clinicalCases = loadData("clinicalCase.json");

function playCategoryCommand(ctx) {
  ctx.session.currentSpeciality = null;
  const specialities = [...new Set(clinicalCases.map((c) => c.speciality))];

  const specialityButtons = specialities.map((speciality) =>
    Markup.button.callback(speciality, `speciality:${speciality}`)
  );

  const keyboard = Markup.inlineKeyboard(specialityButtons, { columns: 2 });

  ctx.replyWithMarkdown("*Elige una especialidad*:", keyboard);
}

async function handleSpecialitySelection(ctx) {
  const selectedSpeciality = ctx.update.callback_query.data.split(":")[1];
  ctx.session.currentSpeciality = selectedSpeciality;

  await playCommand(ctx);
}


module.exports = {playCategoryCommand, handleSpecialitySelection};
