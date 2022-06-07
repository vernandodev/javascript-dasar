// console.log("selamat siang");
// setTimeout(() => {
//     console.log("terimakasih sudah mampir");
// }, 3000);
// console.log("Ada yang bisa dibantu ?")

const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        callback(coffee);
    }, 3000);
}


orderCoffee(coffee => {
    console.log(coffee);
});