const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

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




// <-----------find specific id------------->
const findObject = (arr, key, data) => {
  return arr.find((index) => {
    return index[key] === data;
  });
};
// arr.find(arr=>blah[_id] == req.params.ide

app.get("/comments/:id",function (req,res) {
  const id = Number(req.params.id);
  return res.json(findObject(comments, "_id", id));
});

app.get("/products/:id",function (req,res) {
  const id = Number(req.params.id);
  return res.json(findObject(products, "_id", id));
});
  
app.get("/vehicles/:id",function (req,res) {
  const id = Number(req.params.id);
  return res.json(findObject(vehicles, "_id", id));
});
  
app.get("/contacts/:id",function (req,res) {
  const id = Number(req.params.id);
  return res.json(findObject(contacts, "_id", id));
});



// <-----------post something------------->
const postSomething = (arr, req) => {
  return arr.push(req.body);
};



app.post("/comments",function (req,res) {
  return res.json(postSomething(comments, req));
});

app.post("/products",function (req,res) {
  return res.json(postSomething(products, req));
});

// req.body should get the json sent from client using bodyParser

app.post("/vehicles",function (req,res) {
  return res.json(postSomething(vehicles, req));
});

app.post("/contacts",function (req,res) {
  return res.json(postSomething(contacts, req));
});
  

// <-----------handle bad request------------->
app.use(function (request,response) {
  response.send("NOPE!!!!");
});
