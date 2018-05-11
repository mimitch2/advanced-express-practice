const Vehicle = require( "../models/vehicles.js");

module.exports.list = function list(request, response) {
  return response.json(vehicles);
};
module.exports.show = function show(request, response) {
  const id = Number(request.params.id);
  return response.json(vehicles.find(index => index["_id"] === id));
};
module.exports.create = function create(request, response) {
  const input = request.body;
  const newObj = 
    {_id: vehicles.length + 1, imgUrl: null, year: input.year, make: input.make, 
      model: input.model, price: null, km: null, miles: null, fuel: null, city: null, isNew: null};
  return response.json(vehicles.push(newObj));
};
module.exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};
module.exports.remove = function remove(request, response) {
  return response.json({});
};
  
