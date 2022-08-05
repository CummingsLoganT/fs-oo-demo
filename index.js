// Let's create a basic person object
let person = {
    firstname: 'Logan',
    lastname: 'Cummings',
    age: 27,
    favorites: {
        movies: ['favMovie1' , 'favMovie2' , 'favMovie3'],
        artists: ['fruit salad by The Wiggles' , 'beethoven' , 'jay cole']
    },
    greeting: () => {
        console.log("Hello, World!");
    }
}

// now lets practice accessing key/value pairs within our object
// we can use dot or bracket notation
console.log(person.firstname);
// console.log(person["firstname"]); ~dislike~
// console.log(person[firstname]); will not work because scope

// how do i access the movie of LoTR in my person object
// console.log(person.favorites.movies[1]);

// lets invoke the greeting function
    // person.greeting();

// lets practice some destructuring
    // let {lastname} = person
    // console.log(lastname);
    // console.log(person.lastname);

    // let {greeting} = person
    // greeting();

let {firstname , lastname , age: yearsOfWisdom} = person;
// console.log(firstname , lastname , age);
// firstname = "Nicole";
// console.log(firstname , person.firstname);
// console.log(yearsOfWisdom);

// review of looping objects using for...in loops
// for (let prop in person) {
//     console.log(`the property of ${prop} has a value of: ${person[prop]}`);
// }  /* only ever use bracket notation inside for loops */


// talking about adding and deleting properties
person.job = "instructor";
// console.log(person.job);

delete person.job;
// console.log(person.job);


// CLASSES
class Dog {
    constructor(name, breed, age){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.isCute = true;
    }

    greeting () {
        console.log (`Hello, my name is ${this.name} and I am ${this.age} years old. My breed is ${this.breed}`);
    }
}

const finn = new Dog ("finn" , "Goldendoodle" , 2);
// console.log(finn);
// finn.greeting();

// now lets tackle class extension using puppies
class Puppy extends Dog {
    constructor (name , breed , age ,isTeething) {
        super(name , breed , age);

        this.isTeething = isTeething;
    }
}

const marmy = new Puppy('Marmy' , 'Bernese' , 1 , true);
// console.log(marmy);

