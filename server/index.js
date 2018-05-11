const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://mimitch:Bladerunner80@ds143907.mlab.com:43907/express_practice");



const ContactsRoutes = require("./routes/ContactsRoutes");
app.use(ContactsRoutes);
const CommentsRoutes = require("./routes/CommentsRoutes");
app.use(CommentsRoutes);
const ProductsRoutes = require("./routes/ProductsRoutes");
app.use(ProductsRoutes);
const VehiclesRoutes = require("./routes/VehiclesRoutes");
app.use(VehiclesRoutes);



app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  } 
  console.log("Web server is now running on port 3001`");
});

// <-----------handle bad request------------->
app.use(function (request,response) {
  response.send("NOPE!!!!");
});
