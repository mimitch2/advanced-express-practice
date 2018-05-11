
const Contact = require( "../models/contacts.js");
let contacts = [];

Contact.find({}).exec()
.then(contactsArr => {
  contacts = [...contactsArr];
});


module.exports.list = function list(request, response) {
  Contact.find({}).exec()
.then(contactsArr => {
  contacts = [...contactsArr];
  return response.json(contacts);
});
  console.log(contacts);
 
};

module.exports.show = function show(request, response) {
  const id = Number(request.params.id);
  return response.json(contacts.find(index => index["_id"] === id));
};


module.exports.create = function create(request, response) {
  const input = request.body;
  const newContact = new Contact(
    {_id: contacts.length + 1, 
      name: input.name, occupation: input.occupation, avatar: input.avatar}
      );
  newContact.save().then(savedContact => {
    contacts.push(savedContact);
    return response.json(savedContact);
  });
};

module.exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};
module.exports.remove = function remove(request, response) {
  return response.json({});
};

