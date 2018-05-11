const Vehicle = require( "../models/vehicles.js");
let vehicles = [];

Vehicle.find({}).exec()
.then(commentsArr => {
  vehicles = [...commentsArr];
});

module.exports.list = function list(request, response) {
  Vehicle.find({}).exec()
.then(vehiclesArr => {
  vehicles = [...vehiclesArr];
  return response.json(vehicles);
});
  console.log(vehicles);
};

module.exports.show = function show(request, response) {
  const id = Number(request.params.id);
  return response.json(vehicles.find(index => index["_id"] === id));
};

module.exports.create = function create(request, response) {
  const input = request.body;
  const newVehicle = new Vehicle(
    {_id: vehicles.length + 1, year: input.year + " ", make: input.make + " ", 
      model: input.model}
      );
  newVehicle.save().then(savedVehicle => {
    vehicles.push(savedVehicle);
    return response.json(savedVehicle);
  });
};

module.exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};
module.exports.remove = function remove(request, response) {
  return response.json({});
};
  
