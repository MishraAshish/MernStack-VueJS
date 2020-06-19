//Classes :


class Rectangle { 
  
  constructor(height, width) { 
      this.height = height; 
      this.width = width; 
  } 

  calculateArea(){
    console.log(this.height * this.width);

  }

}

let clsObj = new Rectangle(5, 6);

console.log(clsObj.height)
console.log(clsObj.width)

clsObj.calculateArea();