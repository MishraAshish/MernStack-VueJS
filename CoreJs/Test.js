// Promises : 

let promise1 = new Promise(function(resolve, reject)
 {  
    // setTimeout(function() {   //async callback               
    //     resolve({
    //         "status":200,
    //         "success":"We are resolved",
    //         "job":"laptop has been delivered"
    //     });
    // }, 3000);

    setTimeout(function() {   //async callback               
      reject({
          "status":400,
          "rejected":"We are rejecting our promise",
          "job":"no more laptops"
      });
  }, 3000);
});

promise1.then(function(value) {  
        console.log(value);  // expected output: success object/ resolved
}).catch(function(value) {  
        console.log(value);  // expected output: rejected object
});
         
console.log(promise1);// expected output: [object Promise]
