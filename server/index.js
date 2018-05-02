const express = require("express");
const app = express();
const comments = require("./comments");
const products = require("./products");
const vehicles = require("./vehicles");
const contacts = require("./contacts");

// console.log(comments[1]["_id"]);



app.listen(3002, (err) => {
  if (err) {
    return console.log("Error", err);
  } 
  console.log("Web server is now running on port 3002");
});


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


app.get("/comments/:id",function (req,res) {
  const id = Number(req.params.id);
  const result = comments.find((index) => {
    return index["_id"] === id;
  });
  return res.json(result);
});


  
app.get("/products/:id",function (req,res) {
  return res.json(products);
});
  
app.get("/vehicles/:id",function (req,res) {
  return res.json(vehicles);
});
  
app.get("/contacts/:id",function (req,res) {
  return res.json(contacts);
});

  









app.post("/users",function (req,res) {
  return res.json(users.push({name: "Mike"}));
});

app.delete("/users",function (req,res) {
  return res.json(users.pop());
});


app.use(function (request,response) {
  response.send("NOPE!!!!");
});
