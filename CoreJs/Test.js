// async and await //multithreading in javascript

function resolveAfter2Seconds() {
    
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 5000);
    });

  }
  
  console.log('async starts');

  async function asyncCall() { //will be executed in new thread created by async
    console.log('calling');
    let result = await resolveAfter2Seconds(); //this function needs the thread craeted at line 15
    console.log('call completed');
    console.log(result);
    // expected output: 'resolved'
  }

  asyncCall();

  console.log('after async invocation');