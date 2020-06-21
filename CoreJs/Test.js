// call and apply : setting context of given functions explicitely
// both return fuction execution instantly

//bind : will attach the context at run time and returns function unlike call and apply which returns funciton execution


let userDetails = {
    name : "Blaz",
    age : 19,
    
    showDetails : function () {
      //this : context of userDetails object
      
      setTimeout(function() { //call back function of settimeout
          console.log({
            name: this.name, // this : is global context because settimeout executes without any context being set
            age: this.age
          })
      }.bind(this), // we are copying this which is userDetails as a context to settimeout callback
      3000); //waiting time in milli seconds        
    }
}

userDetails.showDetails();