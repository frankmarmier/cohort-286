const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const oneRecipe = {
  title: "Supar Pastas",
  level: "Easy Peasy",
  ingredients: ["tomatoes", "cucumbers", "pasta"],
  dishType: "snack",
  duration: 10,
  creator: "Mom",
  cuisine: "Home",
};

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
// mongoose
//   .connect(MONGODB_URI, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then((self) => {
//     console.log(`Connected to the database: "${self.connection.name}"`);
//     // Before adding any recipes to the database, let's remove all existing ones
//     return Recipe.deleteMany();
//   })
//   .then(() => {
//     // Run your code here, after you have insured that the connection was made

//     Recipe.create(oneRecipe)
//       .then((createdRecipe) => {
//         console.log(createdRecipe.title);

//         Recipe.create(data)
//           .then((createdRecipes) => {
//             for (let recipe of createdRecipes) {
//               console.log(recipe.title);
//             }

//             Recipe.findOneAndUpdate(
//               { title: "Rigatoni alla Genovese" },
//               { duration: 100 }
//             )
//               .then((updatedDocument) => {
//                 console.log(updatedDocument);
//                 Recipe.deleteOne({ title: "Carrot Cake" })
//                   .then(() => {
//                     console.log("Deleted the Carrot Cake !");
//                     mongoose.connection.close().then(() => {
//                       console.log("Database closed succesfully !");
//                     });
//                   })
//                   .catch((error) => {
//                     console.log("Failed to close database !");
//                   })
//                   .catch((error) => {
//                     console.log(error);
//                   });
//               })
//               .catch((error) => {
//                 console.log(error);
//               });
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   })
//   .catch((error) => {
//     console.error("Error connecting to the database", error);
//   });

/**
 * ASYNC AWAIT
 */

async function seedDatabase() {
  try {
    const dbConnection = await mongoose.connect(MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    // Delete all the recipes in the Database
    await Recipe.deleteMany();

    // Create one recipe
    const createdRecipe = await Recipe.create(oneRecipe);
    console.log(createdRecipe.title);

    // Create many
    const createdRecipes = await Recipe.create(data);

    for (let recipe of createdRecipes) {
      console.log(recipe.title);
    }

    // Update one recipe
    const updatedRecipe = await Recipe.findOneAndUpdate(
      { title: "Rigatoni alla Genovese" },
      { duration: 100 },
      { useFindAndModify: false, new: true } // new true option passed in order to get the recent version of the document
    );
    console.log(updatedRecipe.duration);

    // Delete one recipe
    const deletedRecipe = await Recipe.deleteOne({ title: "Carrot Cake" });
    console.log(deletedRecipe);
    if (deletedRecipe.deletedRecipe > 0) {
      console.log("Recipe successfully deleted !");
    }

    // Close the database
    dbConnection.connection.close();
  } catch (error) {
    console.log(error);
  }
}

seedDatabase();
