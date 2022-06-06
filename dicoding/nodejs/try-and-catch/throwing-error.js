// let json = '{ "age": 20}';

// try{
//     let user = JSON.parse(json);
//     console.log(user.name);
//     console.log(user.age);
// }catch(error){
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

// let json = '{ "name": "richo"}'
// try{
//     let user = JSON.parse(json);

//     if(!user.name){ // throw
//         throw new SyntaxError("name is required!");
//     }

//     errorCode;

//     console.log(user.name);
//     console.log(user.age);
// }catch(error){
//     console.log(`JSON error: ${error.message}`);
// }

let json = '{ "name": "richo", "age": 20}';

try{
    let user = JSON.parse(json);
    if(!user.name){
        throw new SyntaxError("Name is required!");
    }
    console.log(user.name);
    console.log(user.age);

    // errorCode;   TEST error diluar JSON Error

}catch(error){
    //if statement
    if(error instanceof SyntaxError){
        console.log(`JSON Error: ${error.message}`);
    }else if(error instanceof ReferenceError){
        console.log(error.message);
    }else{
        console.log(error.stack);
    }
    // Dengan operator instanceOf, kita bisa mendapatkan tipe dari eror yang terjadi. Dari sana kita bisa membuat percabangan bagaimana cara menangani erornya.
}