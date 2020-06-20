//Functions :
// Function CallBacks :
var hisName = "hisname";

function name(params) {
  console.log(hisName);
  return params;
}


function print(callBackFunc, param) { //Functions can be passed as parameter - callBack Func
    console.log(callBackFunc(param))
}


print(name, "Blaz Demsar");

print(name, "Cyprian");