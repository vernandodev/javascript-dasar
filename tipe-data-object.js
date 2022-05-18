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
console.table(orang);