class Person {
  constructor(name, age){
    this.owner = "TEST";
    this.name = name;
    this.age = age;
  }

  statement(){
    console.log(`Hey ${this.owner}, My name is ${this.name} and I have lost ${this.age} years of my life`);
  }
}


class Bottle extends Person {
  constructor(name){
    super();
    this.owner = "TEST2";
    this.name = name;
  }
}



const P1 = new Person("Anil", "16");
const P2 = new Bottle("Jameson");
P1.statement();
P2.statement();
