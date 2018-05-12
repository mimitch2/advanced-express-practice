const Product = require( "../models/products.js");
let products = [];

const updateData = () => {
  Product.find({}).exec().then(productsArr => {
    products = productsArr;
  });
};

updateData();


module.exports.list = function list(request, response) {
  Product.find({}).exec().then(productsArr => {
    updateData();
    return response.json(productsArr);
  });
};

module.exports.show = function show(request, response) {
  const id = request.params.id;
  Product.find({_id: id}).exec().then(productRes => {
    return response.json(productRes[0]);
  });
};

module.exports.create = function create(request, response) {
  updateData();
  const id = products[products.length - 1]._id + 1;
  const input = request.body;
  const newProduct = new Product(
    {_id: id, name: input.name, description: input.description}
      );
  newProduct.save().then(savedProduct => {
    updateData();
    return response.json(savedProduct);
  });
};

module.exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};
module.exports.remove = function remove(request, response) {
  return response.json({});
};
  
