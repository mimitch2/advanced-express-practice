const products = require("../products");


module.exports.list = function list(request, response) {
  return response.json(products);
};
module.exports.show = function show(request, response) {
  const id = Number(request.params.id);
  return response.json(products.find(index => index["_id"] === id));
};
module.exports.create = function create(request, response) {
  const input = request.body;
  const newObj = 
    {_id: products.length + 1, name: input.name, description: input.description, 
      reviews: [], rating: null, imgUrl: null, price: null, category: null};
  return response.json(products.push(newObj));
};
module.exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};
module.exports.remove = function remove(request, response) {
  return response.json({});
};
  
