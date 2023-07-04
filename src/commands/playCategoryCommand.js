const { Markup } = require("telegraf");
const { playCommand } = require("./playCommand");
const { clinicalCases } = require("../constant.js");

function playCategoryCommand(ctx) {
  ctx.session.currentSpeciality = null;
  const specialities = [...new Set(Object.values(clinicalCases).map((c) => c.speciality))];

  const specialityButtons = specialities.map((speciality) =>
    Markup.button.callback(speciality, `speciality:${speciality}`)
  );

  const keyboard = Markup.inlineKeyboard(specialityButtons, { columns: 2 });

  ctx.replyWithMarkdownV2("**Elige una especialidad: **", keyboard);
}

async function handleSpecialitySelection(ctx) {
  const selectedSpeciality = ctx.update.callback_query.data.split(":")[1];
  ctx.session.currentSpeciality = selectedSpeciality;

  const caseForSelectedSpeciality = Object.values(clinicalCases).filter(
    (c) => c.speciality === selectedSpeciality
  );

  const subSpecialities = [...new Set(caseForSelectedSpeciality.map((c) => c.subSpeciality))];

  const subSpecialityButtons = subSpecialities.map((subSpeciality) => Markup.button.callback(subSpeciality, `subSpeciality:${subSpeciality}`));

  const keyboard = Markup.inlineKeyboard(subSpecialityButtons, {columns: 2})
  ctx.replyWithMarkdownV2("Elige una sub especialidad:", keyboard)
}

async function handleSubSpecialitySelection(ctx){
  const selectedSubSpeciality = ctx.update.callback_query.data.split(":")[1];
  ctx.session.currentSubSpeciality = selectedSubSpeciality;

  await playCommand(ctx);
}

module.exports = { playCategoryCommand, handleSpecialitySelection, handleSubSpecialitySelection };
