
const Contact = require( "../models/contacts.js");
let contacts = [];

const updateData = () => {
  Contact.find({}).exec().then(contactsArr => {
    contacts = contactsArr;
  });
};

updateData();

module.exports.list = function list(request, response) {
  Contact.find({}).exec().then(contactsArr => {
    return response.json(contactsArr);
  });
};

module.exports.show = function show(request, response) {
  const id = request.params.id;
  Contact.find({_id: id}).exec().then(contactRes => {
    return response.json(contactRes[0]);
  });
};

module.exports.create = function create(request, response) {
  updateData();
  const id = contacts[contacts.length - 1]._id + 1; 
  const input = request.body;
  const newContact = new Contact(
    {_id: id, name: input.name, occupation: input.occupation, avatar: input.avatar}
      );
  newContact.save().then(savedContact => {
    updateData();
    return response.json(savedContact);
  });
};

module.exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};
module.exports.remove = function remove(request, response) {
  return response.json({});
};

