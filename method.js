class Person {
    constructor(name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }
    meetMe() {
        console.log(`Hi my name is, ${this.name}`)
    }
    eatBreakfast() {
        console.log('today for breakfast is french toast')
    }
    goToWork() {
        console.log('it is time for me to go to work')
    }
};

class PostalWorker extends Person {
    deliverMail() {
        console.log(`everybody know the postal worker his name is, ${this.name}`)
    }
};

class Chef extends Person {
    cookFood() {
        console.log(`${this.name} makes amazing food`)
    }
};

let Sam = new Person('Sam', '50', "5'11" )
let Jackson = new PostalWorker('Jackson', '35', "6'0");
let Aj = new Chef('Aj', '25', "5'10");


console.log(Sam.meetMe());
console.log(Jackson.deliverMail());
console.log(Aj.cookFood());
