// Old way

// function cook(cb) {
//   setTimeout(() => {
//     console.log("Finished cooking !");

//     if (Math.random() > 5) {
//       cb(null, "Serving the pasta");
//     } else {
//       cb("Oh no you have failed your pasta!", null);
//     }
//   }, 10000);
// }

// function eat(cb) {
//   setTimeout(() => {
//     console.log("Finished eating !");
//     cb();
//   }, 5000);
// }

// function takeAShower(cb) {
//   setTimeout(() => {
//     console.log("Shower finished !");
//     cb();
//   }, 1000);
// }

// function goToSchool() {
//   console.log("Going to school...");
// }

// cook((err, success) => {
//   console.log(err, "this is the error case");
//   console.log(success, "this is the success case");

//   if (err) {
//     console.log("Sad life , going to bed");
//   } else {
//     eat(() => {
//       takeAShower(() => {
//         goToSchool();
//       });
//     });
//   }
// });

// cook();
// eat();
// takeAShower();
// goToSchool();

function cook() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (false) {
        console.log("Finished cooking !");
        resolve();
      }
      reject("Noooo my pasta !");
    }, 3000);
  });
}

function eat() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Eeating finished");
      resolve();
    }, 5000);
  });
}

function takingAShower() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Shower finished");
      resolve();
    }, 1000);
  });
}

function backToSchool() {
  console.log("Going back to school");
}

// cook().then((value1) => {
//   eat().then((value2) => {
//     takingAShower().then((value3) => {
//       backToSchool(value1, value2, value3);
//     });
//   });
// });

// cook()
//   .then(() => {
//     return eat();
//   })
//   .then(() => {
//     return takingAShower();
//   })
//   .then(() => {
//     backToSchool(value1, value2, value3);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

function kneeToElbow() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Knees to elbow finished");
      resolve();
    }, 3000);
  });
}

function squats() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Squats finished");
      resolve();
    }, 2000);
  });
}

// function armsBehindBack() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Final step finished");
//       resolve();
//     }, 1000);
//   });
// }

// kneeToElbow().then(() => {
//   squats().then(() => {
//     armsBehindBack().then(() => {
//       console.log("Sit behind the computer");
//     });
//   });
// });
