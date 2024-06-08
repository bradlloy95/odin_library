// const myObject = {
//     property: 'value!',
//     secProperty: 2

// }

// let varible = 'property';

// console.log(myObject.property)
// console.log(myObject[varible])

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(this.name)
    }
  }
  Player.prototype.sayHello = function() {
    console.log("hello, I am a player")
  }

  const brad = new Player('brad', 'X')
  brad.sayName()
//   const em = new Player('em', 'O')

//   console.log(Object.getPrototypeOf(brad) === Player.prototype);
//   brad.sayHello()
//   console.log(brad.valueOf());

// function Book(title, author, pages, read) {

//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     if (read){
//     this.isRead = 'read';
//     } else {
//         this.isRead = 'not read yet'
//     }

//     this.info = function() {
//         return (`${this.title} by ${this.author}, ${this.pages}, ${this.isRead}`)
//     }
// }


// const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);
// console.log(theHobbit.info())

// function Person(name) {
//     this.name = name;
   
// }

// Person.prototype.sayName = function() {
//     console.log(`Hello, I am ${this.name}`);
// };

// function Player(name, marker, age) {
//     this.name = name;
//     this.age = age
//     this.marker = marker;
//   }

//   Player.prototype.getMarker = function() {
//     console.log(`My marker is '${this.marker}'`);
//   };

// console.log(Object.getPrototypeOf(Player.prototype));

// Now make `Player` objects inherit from `Person`
// Object.setPrototypeOf(Player.prototype, Person.prototype);
// console.log(Object.getPrototypeOf(Player.prototype)); // returns Person.prototype

// const player1 = new Player('steve', 'X', 12);
// const player2 = new Player('also steve', 'O', 13);

// player1.sayName(); // Hello, I'm steve!
// player2.sayName(); // Hello, I'm also steve!

// player1.getMarker(); // My marker is 'X'
// player2.getMarker(); // My marker is 'O'

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
      console.log(this.name)
    };
  }
  
  const player1 = new Player('steve', 'X');
  const player2 = new Player('also steve', 'O');
  player1.sayName(); // logs 'steve'
  player2.sayName(); // logs 'also steve'