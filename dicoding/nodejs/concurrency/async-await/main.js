const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 0;
        setTimeout(() => {
            if (seeds >=10 ){
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis");
            }
        })
    }, 1000);
}

async function makeCoffee() { // 2. kemudian karena fungsi makeCoffee() sudah menangani proses asyncronous tambahkan async sebelum deklarasi fungsi untuk jadi asyncronous
    try{
        const coffee = await getCoffee(); // 1. menambahkan await untuk menunggu fungsi getCoffee() yg berjalan secara asyncronous sebelum pemanggilan fungsi.
        console.log(coffee);
    }catch(rejectedReason){
        console.log(rejectedReason);
    }
}

makeCoffee();