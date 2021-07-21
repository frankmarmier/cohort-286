const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guitarSchema = new Schema({
  brand: {
    type: String,
    unique: true,
    required: true,
  },
  price: Number,
  picture: String,
  modelName: {
    type: String,
    unique: true,
  },
});

const GuitarModel = mongoose.model("Guitar", guitarSchema);
// const MyModel = mongoose.model("CollectionName", aSchema)

const guitars = [
  {
    brand: "Ibanez",
    price: 300,
    modelName: "I32939",
  },
  {
    brand: "Foo",
    price: 232,
    modelName: "Cort329392",
  },
  {
    brand: "Generic brand",
    price: 50,
    modelName: "G50",
  },
];

mongoose
  .connect("mongodb://localhost:27017/thomann", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("I have connected successfully !");

    mongoose.connection.db
      .dropDatabase()
      .then(() => {
        const guitar = {
          brand: "Pbanez",
          price: 20,
          modelName: "RG132",
          EZEZEZEZ: "EIZJEOIZ",
        };
        // CREATE
        GuitarModel.create(guitar)
          .then((createdDocument) => {
            console.log("Success !!");
            console.log(createdDocument);
          })
          .catch((error) => {
            console.log(error);
          });

        //   GuitarModel.insertMany()
        // CREATE many at once
        GuitarModel.create(guitars)
          .then((createdGuitars) => {
            console.log(createdGuitars);

            // UPDATE PART !
            GuitarModel.findOneAndUpdate(
              { brand: "Generic brand" },
              { price: 100 }
            )
              .then((updatedDocument) => {
                console.log("Updated document ====>", updatedDocument);
              })
              .catch((error) => {
                console.log(error);
              });
            // DELETE
            GuitarModel.findOneAndDelete({ brand: "Foo" })
              .then(() => {
                console.log("Delete the document !");

                // READ
                GuitarModel.find()
                  .then((guitarDocuments) => {
                    console.log("All guitars in DB:", guitarDocuments);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
