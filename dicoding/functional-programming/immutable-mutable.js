// Immutable
// const user = {
//     firstname: 'Harry',
//     lastName: 'Protter', // ups, typo!
// }

// const renameLastNameUser = (newLastName, user) => {
//     user.lastName = newLastName;
// }

// renameLastNameUser('Potter', user);

// console.log(user);

// Mutable
const user = {
    firstName: 'Harry',
    lastName: 'Protter'
}

const createUserWithNewLastName = (newLastName, user) => {
    return { ...user, lastName: newLastName}
}

const newUser = createUserWithNewLastName('Potter', user);

console.log(newUser);

