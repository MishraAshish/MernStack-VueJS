//Scope, Context and Call, Apply and Bind

var car = {
    regNumber:"XXXXXXX",
    brand:"Toyota"
}

function displayCar(ownerName, ownerCity, ownerTele){

    console.log(ownerName +"\n"+ ownerCity +"\n"+ ownerTele
                +",\n this is your car : ",
                this.regNumber + " \n  ",
                this.brand
                );    
}

displayCar.call(car, "Jaya","NY",899545)
displayCar.apply(car, ["Jaya","NY",899545])