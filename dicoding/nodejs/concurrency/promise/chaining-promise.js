const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false
}

const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan");
            }else {
                reject("Maaf, mesin sedang sibuk");
            }
        }, 1000);
    });
};

const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if(state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stok cukup, bisa membuat kopi");
            }else {
                reject("Stok tidak cukup!");
            }
        }, 1500);
    });
};

const brewCoffee = () => {
    console.log("Membuatkan kopi anda")
}