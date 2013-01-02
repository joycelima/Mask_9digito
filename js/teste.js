//Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}
 
Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info("Shape moved.");
};
 
// Rectangle - subclass
function Rectangle() {
  Shape.call(this); //call super constructor.
}
 
Rectangle.prototype = Object.create(Shape.prototype);
 
var rect = new Rectangle();
 
rect instanceof Rectangle //true.
rect.move(); //Outputs, "Shape moved."