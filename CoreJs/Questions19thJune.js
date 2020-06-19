// Ques : 19th

//1- Create a function which takes array of numbers as input and returns sum of all the numbers, 
	//use rest parameter and spread operator for the same. + reduce

//2- Create a function to populate user details. 
	//func - populateDetail prints Adress and accepts a callBackFunction which prints Name, Age and Topic

//3- Please solve below outputs to print values (we can use lexical scope variables if needed)

	const arr = [10, 12, 15, 21];
	for (var i = 0; i < arr.length; i++) {
	  setTimeout(function() {
		console.log('Index: ' + i + ', element: ' + arr[i]);
	  }, 1000);
	}
	
//4- Print the last name through destructuring 

	const person = {
		userDetails :{
			first: "FirstName",
			last: "LastName"
		}
	}
	
//5- Print the age and maths score and also add physics score through destructuring 

	const student1 = {
	  name: 'John Doe',
	  age: 16,
	  scores: {
		  maths: 74,
		  english: 63
	  }
	};
	
//6- Using for in loop print the details as below

	const student = {
	  firstname: 'Glad',
	  lastname: 'Dennis',
	  country: 'Nigeria'
	};
	
//7- Write and example when i don't pass a parameter, still it prints the values, using default parameter in function