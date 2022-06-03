class Animal{
    constructor(name, speed){
        this.speed = speed;
        this.name = name;
    }
    run(speed){
        this.speed = speed;
        alert(`${this.name} runs with speed ${this.speed}`);
    }
    stop(){
        this.speed = 0;
        alert(`${this.name} stand still`);
    }
}

class Rabbit extends Animal{
    constructor(name, earLength){
        super(name); // overriding constructor
        this.earLength = earLength;
    }
    hide() {
        alert(`${this.name} hides!`);
    }
    stop(){
        super.stop(); // overriding method
        this.hide();
    }
}
let rabbit = new Rabbit("White Rabbit", 10);
console.log(rabbit);