const comments = require("../comments");


module.exports.list = function list(request, response) {
  return response.json(comments);
};
module.exports.show = function show(request, response) {
  const id = Number(request.params.id);
  return response.json(comments.find(index => index["_id"] === id));
};
module.exports.create = function create(request, response) {
  return response.json({});
};
module.exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};
module.exports.remove = function remove(request, response) {
  return response.json({});
};
  
