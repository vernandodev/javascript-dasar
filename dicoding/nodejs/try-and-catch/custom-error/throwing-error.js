class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}

let json = '{ "age": 20}';

try{
    let user = JSON.parse(json);
    if(!user.name){
        throw new ValidationError("Name is required!");
    }
    if(!user.age){
        throw new ValidationError("Age is required!");
    }

    console.log(user.name);
    console.log(user.age);

    // errorCode;   TEST error diluar JSON Error

}catch(error){
    //if statement
    if(error instanceof SyntaxError){
        console.log(`JSON Error: ${error.message}`);
    }else if(error instanceof ValidationError){
        console.log(`Invalid data: ${error.message}`);
    }else if(error instanceof ReferenceError){
        console.log(error.message);
    }else{
        console.log(error.stack);
    }
    // Dengan operator instanceOf, kita bisa mendapatkan tipe dari eror yang terjadi. Dari sana kita bisa membuat percabangan bagaimana cara menangani erornya.
}