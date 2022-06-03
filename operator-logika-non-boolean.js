
// OR
console.log("Hello" || "");
console.log("" || []);
console.log("0" || "NOL");
console.log(0 || "NOL");
console.log(null || "NULL");
console.log(undefined || "UNDEFINED");
console.log(0 || false);

const person = {
    firstName: "",
    lastName: "Khannedy"
};

const name = person.firstName || person.lastName;
console.log(name);

// AND
console.log("Hello" && "");
console.log("" && []);
console.log("0" && "NOL");
console.log(0 && "NOL");
console.log(null && "NULL");
console.log(undefined && "UNDEFINED");
console.log(0 && false);

const kota = {
    namaKota: "",
    namaBupati: "Khannedy"
}

const cek = person.firstName && person.lastName;
console.log(cek);

