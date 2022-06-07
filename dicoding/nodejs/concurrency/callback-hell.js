function makeACake(...rawIngredients) {
    const ingredients = collectIngredients(rawIngredients);
    dough = makeTheDough(ingredients);
    pouredDough = pourDough(dough);
    cake = bakeACake(pouredDough);
    console.log(cake);
}
const hasil = makeACake();
console.log(hasil);

// callback hell digunakan untuk mengambil nilai dari metode asyncronus namun code sulit diterjemahkan gunakan promise