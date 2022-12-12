const fileSystem = require("fs");
const colors = require("colors");

const creatTabla = async (base = 5, l, h) => {
  try {
    if (l) {
      console.log(colors.magenta("=============="));
      console.log(colors.red.underline(`Tabla del ${base}`));
      console.log(colors.magenta("=============="));
    }
    let salida = "";
    for (let i = 1; i <= h; i++) {
      salida += `${base} x ${i} = ${base * i} \n`;
    }
    if (l) console.log(colors.rainbow(salida));

    fileSystem.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  creatTabla,
};
