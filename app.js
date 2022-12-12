const { boolean } = require("yargs");
const colors = require("colors");
const { creatTabla } = require("./helpers/multiplicar.js");
console.clear();

/* LAS OPTIONS SON LOS PARAMETROS QUE ENVIAMOS POR CONSOLA */
/* LEERMOS LOS PARAMETROS POR MEDIO DE ARGV (yargs) o (procces.args) */

const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en consola",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Hasta qué número se hará la tabla",
  })
  .check((argv, option) => {
    console.log(argv.l);
    if (isNaN(argv.b)) {
      throw "La base debe ser un número";
    }
    return true;
  }).argv;

console.log(argv);

creatTabla(argv.b, argv.l, argv.h)
  .then((el) => console.log(colors.green(el)))
  .catch((err) => console.error(err));

/* { _: [], base: 5, listar: true, '$0': 'app' }
base: yargs  5 */

// PROCESS.ARG = MUESTRA LO ESCRITO EN CONSOLA

/* const base = 2; */

/* console.log(process.argv);
const [, , arg3 = "base=5"] = process.argv;
const [, base = 5] = arg3.split("=");
console.log(base);

creatTabla(base)
  .then((el) => console.log(el))
  .catch((err) => console.error(err));
 */
/* fileSistem.writeFile(`tabla-${base}.txt`, salida, (err) => {
  //si no se indica path, se crea en este mismo comp
  if (err) throw err;
  console.log(`Tabla-${base}.txt`);
}); */

/* const originalText = bytes.toString(CryptoJS.enc.Utf8);
console.log(originalText); */
