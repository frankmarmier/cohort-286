// function eat(){
//     return new Promise((resolve,reject) => {

//             //

//     })
// }

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (true) {
//       resolve("Hello world !");
//     } else {
//       reject("You have been rejected !");
//     }
//   }, 1000);
// });

// console.log(promise1);

// promise1
//   .then(function (response) {
//     console.log(response);
//     // console.log("I have been fulfilled !");
//   })
//   .catch(function (error) {
//     console.log(error);
//     // console.log("I have been rejected !");
//   });

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Squats");
//     resolve("value1");
//   }, 4000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Arms behind backs");
//     resolve("value2");
//   }, 3000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Knees to elbow");
//     resolve("value3");
//   }, 2000);
// });

// console.log(p1, p2);

// p1.then(() => {
//   console.log("After promsie 1");
//   p2.then(() => {
//     console.log("After promise 2");
//     p3.then(() => {
//       console.log("After promise 3");
//     });
//   });
// });

// console.log("I am after the promise !");

// p1.then(p2.then(p3.then((value) => console.log(value))));

// p1.then((value1) => {
//   console.log("p1 resolved");
//   return p2;
// })
//   .then((value2) => {
//     console.log("p2 resolved");

//     return p3;
//   })
//   .then((value3) => {
//     console.log("p3 resolved");
//   });

const brother1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I got the baking soda");
      resolve();
    }, 1000);
  });
};

const brother2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I got the sugar");
      resolve();
    }, 3000);
  });
};

const brother3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I got the eggs");
      resolve();
    }, 6000);
  });
};

brother1().then(() =>
  brother2().then(() => {
    brother3().then(() => {
      console.log("All 3 have came back ! Standard way ");
    });
  })
);

const arrayOfPromise = [brother1(), brother2(), brother3()];
// console.log(arrayOfPromise);

// Promise.all(arrayOfPromise)
//   .then((value) => {
//     console.log("Promise.all way Promises have completed !");
//   })
//   .catch((error) => {
//     console.log(error);
//   });
