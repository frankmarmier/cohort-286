const express = require("express");

const app = express();

// app.get("/",function(request,response,next){
// response.send("<h1>Hello ! </h1>")
// })

app.use(express.static(__dirname + "/public"));

console.log("Directory name", __dirname);

app.get("/", (request, response, next) => {
  //   response.send("<h1>Hello my friends !</h1>");
  //   response.sendFile(__dirname + "/html/home.html");
  response.render("home.hbs");
});

app.get("/about", (req, res, next) => {
  //   res.sendFile(__dirname + "/html/about.html");
  res.render("about.hbs");
});

app.get("/contact", (req, res, next) => {
  //   res.sendFile(__dirname + "/html/contact.html");
  res.render("contact.hbs");
});

// app.get("/styles/index.css", (req, res, next) => {
//   res.sendFile(__dirname + "/styles/index.css");
// });

app.listen(4000);
