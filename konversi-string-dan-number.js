const value1 = Number("1.5");
const value2 = 1;
const sum = value1 + value2;
console.log(sum);

const a = 1;
const b = 1;
const total = a.toString() + b.toString();
console.log(total);

console.log(parseInt("salah"));
console.log(parseInt("1salah"));
console.log(parseFloat("1.1eko"));
console.log(Number("1salah")); // tidak mentolerir kesalahan input satupun

// OPERASI PADA NaN
const first = Number("salah");
const totalNumber = first + 100;
console.log(totalNumber);

// isNaN() Function
console.log(isNaN(first));

// parseInt(string) = mengkonversi dari string ke number (bilangan bulat)
// parseFloat(string) = mengkonversi dari string ke number (bilangan pecahan)
// Number(string) = mengkonversi dari string ke number (bilangan bulat dan pecahan)
// number.toString() = mengkonversi dari number ke string