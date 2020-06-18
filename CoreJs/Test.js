//Ques : 

//- Present an example for Encapsulation in javascript
//- Present an example for Inheritance in javascript
//- Write a function display UserDetails, where it gets the details printed from the User Object setup with the help of call and apply

//- Solve below function with the help of bind
	var hero = {
		_name: 'John Doe',
		getSecretIdentity: function (){
			setTimeout(function(){
				console.log(this._name);
			}, 1000);
			
		}
	};

	hero.getSecretIdentity()