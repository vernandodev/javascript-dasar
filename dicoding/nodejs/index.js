import coffeStock from "./state.js";

const makeCoffe = (type, miligrams) => {
    if (coffeStock[type] >= miligrams) {
        console.log("Kopi dibuat");
    }else {
        console.log('biji kopi habis');
    }
}

makeCoffe("robusta", 80);