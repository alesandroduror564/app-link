/* 
Filename: ComplexJavaScriptCode.js

Description: This JavaScript code is a simulation of a virtual pet game. It provides functionality for creating and managing virtual pets, including feeding, playing, training, and managing their health and happiness levels. The code is organized into classes and uses various complex algorithms and data structures.

*/

class Pet {
  constructor(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.hunger = 50;
    this.happiness = 50;
    this.health = 100;
  }

  feed() {
    this.hunger -= 10;
    if (this.hunger < 0) {
      this.hunger = 0;
    }
    this.happiness += 5;
    this.health += 2;
    if (this.health > 100) {
      this.health = 100;
    }
  }

  play() {
    this.hunger += 5;
    this.happiness += 10;
    if (this.happiness > 100) {
      this.happiness = 100;
    }
    this.health -= 5;
    if (this.health < 0) {
      this.health = 0;
    }
  }

  train() {
    this.hunger += 2;
    this.happiness -= 5;
    if (this.happiness < 0) {
      this.happiness = 0;
    }
    this.health += 5;
    if (this.health > 100) {
      this.health = 100;
    }
  }

  checkStatus() {
    console.log(`${this.name}'s status:`);
    console.log(`Hunger: ${this.hunger}`);
    console.log(`Happiness: ${this.happiness}`);
    console.log(`Health: ${this.health}`);
  }
}

class GameManager {
  constructor() {
    this.pets = [];
  }

  addPet(pet) {
    this.pets.push(pet);
  }

  feedAllPets() {
    for (let pet of this.pets) {
      pet.feed();
    }
    console.log("All pets have been fed.");
  }

  playWithPet(petName) {
    let pet = this.findPetByName(petName);
    if (pet) {
      pet.play();
      console.log(`${pet.name} had a great time playing with you.`);
    } else {
      console.log(`Pet with name ${petName} not found.`);
    }
  }

  trainPet(petName) {
    let pet = this.findPetByName(petName);
    if (pet) {
      pet.train();
      console.log(`${pet.name} has improved their skills.`);
    } else {
      console.log(`Pet with name ${petName} not found.`);
    }
  }

  findPetByName(petName) {
    for (let pet of this.pets) {
      if (pet.name === petName) {
        return pet;
      }
    }
    return null;
  }
}

// Create a game manager instance
const gameManager = new GameManager();

// Create pets
const pet1 = new Pet("Fluffy", "Cat", 2);
const pet2 = new Pet("Buddy", "Dog", 4);
const pet3 = new Pet("Charlie", "Bird", 1);

// Add pets to the game manager
gameManager.addPet(pet1);
gameManager.addPet(pet2);
gameManager.addPet(pet3);

// Feed all pets
gameManager.feedAllPets();

// Play with a pet
gameManager.playWithPet("Fluffy");

// Train a pet
gameManager.trainPet("Buddy");

// Check the status of a pet
pet1.checkStatus();