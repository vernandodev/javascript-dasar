const name = "Richo vernando";
const satu = "satu";
const dua = "dua";
const tiga = "tiga";
const template =  `Name : ${name} ${satu} ${dua} ${tiga}`;
console.info(template);

const nilai = 90;
const template2 = `Name : ${name}, Lulus : ${nilai > 75}`;
console.info(template2);

// MULTILINE

const multilineString = `Multiline
String
Test
1`;
console.info(multilineString);
//document.writeln("<pre>");
document.writeln(multilineString);
//document.writeln("</pre>");