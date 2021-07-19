// https://expressjs.com/
const express = require("express"); // Import the express API into our file in order to use
// some of it's functionalities

const app = express(); // express is a function that returns an object
// that has methods that allows us to create a web server

// app.get("/",function(request,response,next){
// response.send("<h1>Hello ! </h1>")
// })

/** https://expressjs.com/en/starter/static-files.html  */
app.use(express.static(__dirname + "/public"));
// Tell express where the static assets will be served from (css,images,videos,js(DOM...)) in this case, the public folder
// This allows the browser to get these assets without having to ask for permissions
// and without having to create seperate routes for these type of files

/**
 * The default configuration of express for the views is
 * to look for a folder named views at the root of the directory
 * If you want to change this behaviour you can call app.set
 */

// app.set("views", __dirname + "/path/to/views/folder");

/**
 * In NodeJS, every module (file) has access to a variable
 * named __dirname,  representing the absolute path of the file currently executed
 */

console.log("Directory name", __dirname);

/**
 * SYNCHRONOUS HTTP VERBS (requests made by the browser)
 * GET: RETRIEVE some resource FROM the server
 * POST: SEND some information TO the server
 */

app.get("/", (request, response, next) => {
  //   response.send("<h1>Hello my friends !</h1>"); // Respond with a string.
  //   response.sendFile(__dirname + "/html/home.html"); // Respond with a file.
  response.render("home.hbs"); // Respond with an html file converted by a templating engine.
});

app.get("/about", (req, res, next) => {
  //   res.sendFile(__dirname + "/html/about.html");
  res.render("about.hbs");
});

app.get("/contact", (req, res, next) => {
  //   res.sendFile(__dirname + "/html/contact.html");
  res.render("contact.hbs");
});

app.listen(4000, () => {
  console.log(`App listening on http://localhost:4000`);
}); // Expose our app on PORT 4000, allowing HTTP Requests

console.log("Hello where am i ?");
console.log("I am logged server side ?");
