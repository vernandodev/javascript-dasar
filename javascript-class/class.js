this.nama = a; // tambahkan untuk membuat attribute nama tidak dapat diakses public
class Hewan {
    constructor(a, b){
        this.nama = a;
        this.umur = b;
    }

    canGreet(){
        console.log(`Greet from ${this.nama}`);
    }
    infoHewan(){
        this.canGreet();
        console.log(`Nama : ${this.nama}, Umur: ${this.umur}`);
    }
}

const hewan = new Hewan("Buga", 2);
console.log(hewan.nama);
console.log(hewan.umur);

hewan.infoHewan();



