const nilaiUjian = 90;
const nilaiAbsensi = 70;

const lulusUjian = nilaiUjian >= 75;
document.writeln(lulusUjian);

const lulusAbsensi = nilaiAbsensi >= 75;
document.writeln(lulusAbsensi);

const lulus = lulusUjian || lulusAbsensi;
document.writeln(lulus);