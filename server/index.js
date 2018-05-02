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

  









app.post("/users",function (req,res) {
  return res.json(users.push({name: "Mike"}));
});

app.delete("/users",function (req,res) {
  return res.json(users.pop());
});


app.use(function (request,response) {
  response.send("NOPE!!!!");
});
