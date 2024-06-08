console.log('hello')

let x = {};  // let x = new object

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
}

const another = new Circle(1);


let number = 10