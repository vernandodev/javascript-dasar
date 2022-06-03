// // Private
// class FancyLog{
//     decorator = 'duck img';
//     #message;

//     set #decoratedMessage(message){
//         this.#message = message;
//     }

//     get #decoratedMessage(){
//         return `${this.decorator} ${this.#message} ${this.decorator}`;
//     }
// }

// const cekFancy = new FancyLog();
// console.log(cekFancy.decorator);

class WhatsApp extends Mail{
    constructor(username, isBussinessAccount, phone) {
        super(phone);
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }
}

const wa1 = new WhatsApp('dicoding', true, 089989090898);
console.log(wa1);