// Arrow Functions : Fat arrow functions 
//2. Resolving the context 

let userDetails = {
    userid : 2021,

    printUserId : function() {
        console.log("UserID Before:", this.userid); //2021 //this : is context of printUserId which is userDetails

        // setTimeout(function () {
        //     console.log("UserID :", this.userid); // undefined as context (this), is global that instead of userDetails
        // }, 3000);

        setTimeout(function () {
          console.log("UserID :", this.userid); // using bind we set the context back to userDetails so the output
        }.bind(this), 3000);


        let _this = this;
        setTimeout(function () {
          console.log("UserID :", _this.userid); // printing the userid from parents context
        }, 3000);


        //resolving through arrow function
        setTimeout(() => {
          console.log("UserID Arrow :", this.userid); // it copies the immediate parent functions context to resolve "this"
        }, 3000);
    }
}

userDetails.printUserId();