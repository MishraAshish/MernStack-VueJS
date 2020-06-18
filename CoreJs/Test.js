// spread syntax // spread operator

function sum(val1 = 1, val2 = 10, val3) { //default parameter
  
    return val1+val2+val3;

}

let arrNum = [6,7,8];


//console.log(sum(arrNum[0],arrNum[1],arrNum[2]));
console.log(sum(...arrNum));

console.log(sum.apply(null,arrNum)); //use of apply was done when we didn't hade spread operator, null- as we dont have any object in sum to show values


//Rest Parameters : are used to recive the parameters as array in function (...array)

function sumRest(...restParams) {
  
  return restParams.reduce((last, current)=>{
      return last + current
    });

}

let arrSpread = [6,7,8];
console.log(sumRest(...arrSpread));

let arrSpr = [1,2,4,3,5,6,7,8,0,4,35,543,5435,45344,54543545,345,345,3453454,534534,5345,3453];
console.log(sumRest(...arrSpr));