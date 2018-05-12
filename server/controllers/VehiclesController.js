const Vehicle = require( "../models/vehicles.js");
let vehicles = [];

const updateData = () => {
  Vehicle.find({}).exec().then(commentsArr => {
    vehicles = commentsArr;
  });
};

updateData();

module.exports.list = function list(request, response) {
  Vehicle.find({}).exec().then(vehiclesArr => {
    updateData();
    return response.json(vehiclesArr);
  });
};

module.exports.show = function show(request, response) {
  const id = request.params.id;
  Vehicle.find({_id: id}).exec().then(vehicleRes => {
    return response.json(vehicleRes[0]);
  });
};

module.exports.create = function create(request, response) {
  updateData();
  const input = request.body;
  const newVehicle = new Vehicle(
    {_id: vehicles.length + 1, year: input.year + " ", make: input.make + " ", 
      model: input.model}
      );
  newVehicle.save().then(savedVehicle => {
    updateData();
    return response.json(savedVehicle);
  });
};

module.exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};
module.exports.remove = function remove(request, response) {
  return response.json({});
};
  
