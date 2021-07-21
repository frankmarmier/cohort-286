function eat() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Eeating");
      resolve("A full stomach");
    }, 1000);
  });
}

function cook() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (false) {
        resolve("Pasta");
      } else {
        reject("You have burned the pasta !");
      }
    }, 2000);
  });
}

// cook().then(() => {
//     eat().then(() => {
//       console.log("Do something else");
//     });
//   });

// async function program() {
//   const result1 = await cook();
//   console.log(result1);
//   console.log("After cooking!");
//   const result2 = await eat();
//   console.log(result2);
//   //   console.log("After Eating !");
// }

async function program() {
  try {
    const result1 = await cook();
    console.log(result1);
    // console.log("After cooking!");
    const result2 = await eat();
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
}

program();

// console.log("I should be logged after the program execution !");

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

async function program2() {
  try {
    await Promise.all([brother1(), borther2(), brother3()]);
    console.log("After promise.all");
  } catch (error) {
    console.log(error);
  }
}
