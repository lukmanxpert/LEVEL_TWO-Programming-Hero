// class Animal {
//   name: string;
//   species: string;
//   sound: string;
//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }
//   makeSound = () => console.log(`${this.name} is making sound: ${this.sound}`);
// }

// todo => better way ---> in this way, ts can automatically define and initialize the properties
class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  makeSound() {
    console.log(`${this.name} is making sound: ${this.sound}`);
  }
  //   makeSound = () => console.log(`${this.name} is making sound: ${this.sound}`);
}

const dog = new Animal("Doggy", "Dog", "Ghew Ghew");
const cat = new Animal("Kimiko", "Cat", "Mew Mew");

// console.log("dog :>> ", dog);
// console.log("cat :>> ", cat);

dog.makeSound();
