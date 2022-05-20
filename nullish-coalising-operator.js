let parameter;

let data = parameter;

if(data === undefined || data === null){
    data = "Nilai default";
}

console.log(`${data}`);

// nullish operator

let total;
let hasil = total ?? "Nilai default";
console.log(`${hasil}`);