// questions 

//Filter , Map, Reduce, Some
var persons = [
  {id : 1, name : "John", savedby : "CaptainAmerica"},
  {id : 2, name : "Alice", savedby : "IronMan"},
  {id : 3, name : "Roger", savedby : "CaptainAmerica"},
  {id : 4, name : "Adam", savedby : "IronMan"},
  {id : 5, name : "Alex", savedby : "SpiderMan"}
];

//1. List the person objects who are saved by IronMan
//2. List the person objects who are not saved by IronMan
//3. List the person names who are saved by CaptainAmerica
//4. List the person id who are not saved by SpiderMan
//5. Check if ther are any who are saved by AntMan
//6. Check if ther are any who are saved by SpiderMan


//promise related questions
//1. create a promise to read user details after 2 seconds when resolved : should have status, name, age, city
//2. create a promise to read error after 1 second when rejected : should have status, error

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

console.log('asyn starts');

async function asyncCall() {
  console.log('calling');
  var result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: 'resolved'
}
asyncCall();