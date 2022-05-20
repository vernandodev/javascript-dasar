const person = {};

// Menambah atau mengubah
person["nama"] = "Eko kurniawan";
person["alamat"] = "Indonesia";
person["umur"] = 30;

delete person["umur"];

console.table(person);

const orang = {
    "nama lengkap" : "Eko kurniawan",
    alamat : "Indonesia",
    umur: 30
};

// Mengakses property object
console.log(`Nama : ${orang["nama lengkap"]}`);
console.log(`Alamat : ${orang.alamat}`);
console.log(`Umur : ${orang.umur}`);