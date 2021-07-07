// A callback is a function passed as a parameter in order
// to be executed at any point in time of the function receiving the callback

function aFunctionA() {
  console.log("hello world");
}

function aFunctionB(aCallBack) {
  //   console.log(aCallBack);
  aCallBack();
  //   aFunctionA();
}

aFunctionB(aFunctionA);

// aFunctionB(() => {
//   console.log("I am another function");
// });

aFunctionB(function () {
  console.log("I am another function");
});
