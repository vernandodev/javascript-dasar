let arrayKosong = [];
let array = ["Satu", "Dua", "Tiga"];
console.log(array);

const names = [];
names.push("Richo");
names.push("Vernando", "Vernandi");
console.table(names);

console.info(names[0]);

names[0] = "RichoBaru";
console.table(names);

delete names[2];
console.table(names);

names.push("Vernandi");
console.table(names);

names[2] = "Undelete";
console.table(names);

// Array Join
const fruits = ['Apple', 'Banana'];
const fruitsString = fruits.join(', ');
console.log(fruitsString);

names.push(["array1", "array2", "array3"]);
console.table(names);

// https://devdocs.io/javascript/global_objects/array

// array.push(value)  (Menambah data ke array)
// array.length       (Untuk mendapatkan panjang array)
// array[index]       (Mendapat data di posisi index)
// array[index] = value (Mengubah data di posisi index)
// delete array[index] (Menghapus data di posisi index, namun index tidak bergeser)