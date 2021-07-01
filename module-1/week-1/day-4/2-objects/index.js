// Objects
const anObject = {}; // initialize an object

// they are grouped by key : value pairs

const myCat = {
  name: "Lola", // the key is name, the value is the string "Lola"
  //   toto: 2, // the key is name, the value is the number 2
  //   bar: false,
  //   city: {
  //     name: "Paris",
  //     country: "France",
  //     location: {
  //       lat: 32323232.333,
  //       lng: 32324.33,
  //     },
  //   },
  //   purr: function () {},
  hobbies: ["Sleeping", "eating", "sleeping again"],
  // foo_bar_baez: "hello world",
  // ["owner"]: "franck", // you can write keys with what is called a computed property name
  // foo-bar-baez: "hello wold", // keys cannot be kebab cased
  // ["foo-bar-baez"]: "hello wold", // but with the computed property meaning ["property"] you can bypass it (don't do this)
};

// Accessing a value on an object

// console.log(myCat.name);

// console.log(myCat.city.country);

// console.log(myCat["name"]);
// console.log(myCat["city"].country);
// console.log(myCat["city"]["country"]);

// Adding a key value pair to an object

console.log(myCat);
myCat.color = "brown";
console.log(myCat);

// Replace a value on a key

myCat.name = "Fugee";

console.log(myCat);

// Removing a key : value pair

delete myCat.name;

console.log(myCat);

//  myCat =  {
//      hobbies: ["Sleeping", "eating", "sleeping again"],
// }

// console.log(myCat.hobbies[1]);

console.log(myCat.color);
console.log(typeof myCat.color);
console.log(myCat.color.toUpperCase());

// console.log(myCat.hobbies);

for (let i = 0; i < myCat.hobbies.length; i++) {
  console.log(myCat.hobbies[i]);
  //   console.log(myCat.hobbies.toUpperCase());
}
