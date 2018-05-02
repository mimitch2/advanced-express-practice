const express = require("express");
const app = express();
const comments = require("./comments");
const products = require("./products");
const vehicles = require("./vehicles");
const contacts = require("./contacts");


app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  } 
  console.log("Web server is now running on port 3001");
});


// <-----------get full arrays------------->
app.get("/comments",function (req,res) {
  return res.json(comments);
});

app.get("/products",function (req,res) {
  return res.json(products);
});

app.get("/vehicles",function (req,res) {
  return res.json(vehicles);
});

app.get("/contacts",function (req,res) {
  return res.json(contacts);
});



// <-----------find specific id------------->
const findObject = (arr, key, data) => {
  return arr.find((index) => {
    return index[key] === data;
  });
};

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
const postSomething = (arr) => {
  return arr.push({name: "Mike"});
};

app.post("/comments",function (req,res) {
  return res.json(postSomething(comments));
});

app.post("/products",function (req,res) {
  return res.json(postSomething(products));
});

app.post("/vehicles",function (req,res) {
  return res.json(postSomething(vehicles));
});

app.post("/contacts",function (req,res) {
  return res.json(postSomething(contacts));
});
  

// <-----------handle bad request------------->
app.use(function (request,response) {
  response.send("NOPE!!!!");
});
