async function infoCommand(ctx) {
  const duckSticker =
    "CAACAgIAAxkBAAIHtGSKE_IaUza2-_n8XP4eV8MF9fa6AAL-AANWnb0K2gRhMC751_8vBA";
    await ctx.replyWithMarkdownV2(
        "\\__Nosotros somos de la empresa *PatitoCode*, nos apasiona crear soluciones de software de alta calidad que ayuden a las empresas a alcanzar sus objetivos\\. Nos enorgullecemos de nuestro trabajo y estamos comprometidos a ayudar a las empresas a tener éxito a través del poder del software\\. \n\nEl ENARM es una prueba que se realiza de maneral anual en México, y que tiene como conocimiento, hablidades y destrezas de los aspirantes a residencias médicas\\. Esta prueba es un requisito para poder acceder a una de las plazas de residencias médicas\\.\\nLa idea fue la creación de Maestro ENARM chatbot para telegram en el cual ayude a los candidatos de especialidad a prepararse par el examen ENARM\\__\\. \n\nPara mas información visitamos en: [https://buencodigo\\.dev/?page\\_id\\=1351](https://buencodigo\\.dev/?page\\_id\\=1351)"
      );
      
  await ctx.replyWithSticker(duckSticker);
}
module.exports = infoCommand;
