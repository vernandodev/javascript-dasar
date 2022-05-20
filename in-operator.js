// in-operator mengecek sebuah property / index ada atau tidak, jika undefined & null dianggap ada

const person = {
    firstname : "eko",
    lastname: "kurni"
}

if ("firstname" in person){
    console.log(`hello ${person.firstname}`);
}else{
    console.log(`Hello ${person.lastname}`);
}

const student = {
    firstname: undefined,
    lastname: "kurni"
}

if ("firstname" in student){
    console.log(`hello ${student.firstname}`);
}else {
    console.log('hello');
}

const array = [null, "kurni", null];
const result = 0 in array;
console.log(`${result}`);