const arr = [10, 12, 15, 21];

console.log(i); // undefined

for (var i = 0; i < arr.length; i++) {
 
  // setTimeout(function(i_local) {
  //   return function() {
  //     console.log('The index of this number is: ' + i_local);
  //   }
  // }(i), 1000);

    setTimeout(function() {
		    console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 1000);
    
}

console.log(i);


for (let j = 0; j < arr.length; j++) {
 
    setTimeout(function() {
		    console.log('Index: ' + j + ', element: ' + arr[j]);
    }, 1000);
    
}