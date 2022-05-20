let data = "r";

if(typeof data === "number"){
    console.log('number');
}else if(typeof data === "string"){
    console.log('string');
}else if(typeof data === "boolean"){
    console.log('boolean');
}else if(typeof data === "bigint"){
    console.log('bigint');
}else{
    console.log('kecuali diatas');
}

let nama = {};

const typeData = typeof nama;
document.writeln(`${typeData}`);