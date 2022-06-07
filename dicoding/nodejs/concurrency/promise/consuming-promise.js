const stock = {
    coffeeBeans: 50,
    water: 10,
}

const checkStock = () => {
    return new Promise((resolve, reject) => {
        if(stock.coffeeBeans >= 16 && stock.water >= 250){
            resolve("Stock cukup, untuk hari ini");
        }else{
            reject("Stock kurang ! tidak cukup untuk hari ini");
        }
    })
}

const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}

const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}

checkStock().then(handleSuccess. handleFailure);

console.log(checkStock());