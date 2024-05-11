
class Person {
  constructor(name,age) {
    this.name = name;
    this.age = age;
    
  }
  eat() {
    console.log(`${this.name} is eathing.`)
  };
}


class Cricketer extends Person{
  constructor(name, age, type, country) {
    super(name,age)
    this.type = type;
    this.country = country;
  }
  play() {
    console.log(`${this.name} is playing.`);
  }
}


let sakib = new Cricketer("sakib", 35, "Allrounder", "Bangladesh");





















