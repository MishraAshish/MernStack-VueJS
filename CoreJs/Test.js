//Scope, Context and Call, Apply and => Bind

// bind :  Will keep holding the context and will not run immediately but supply the context when event is invoked
var user = {
    id: 42,
    printId: function() { 
        
        setTimeout(
            function() { // a function as a callback to settimeout
                console.log("User Id is : ", this.id);
            }.bind(this), //keeps attached the context for the time till your event executes
                2000 //milli seconds
            );

        //console.log("User Id is : ", this.id);
    }
   };

user.printId();