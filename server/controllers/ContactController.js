
const contacts = require("../contacts");

module.exports.list = function list(request, response) {
  return response.json(contacts);
};
module.exports.show = function show(request, response) {
  const id = Number(request.params.id);
  return response.json(contacts.find(index => index["_id"] === id));
};

module.exports.create = function create(request, response) {
  const input = request.body;
  const newObj = {_id: contacts.length + 1, name: input.name, occupation: input.occupation, avatar: input.avatar};
  return response.json(contacts.push(newObj));
};
module.exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};
module.exports.remove = function remove(request, response) {
  return response.json({});
};

