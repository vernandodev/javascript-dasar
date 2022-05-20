const person= {
    address: {
        country: "indo"
    }
};

let country;
if(person.address !== undefined && person.address !== null){
    country = person.address.country;
}

// optional chaining untuk pengecekan lebih baik dibanding if
console.log(`${person?.address?.country}`);

console.log(`${country}`);
console.log('tembus');