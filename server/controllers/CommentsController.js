
const Comment = require( "../models/comments.js");
let comments = [];

Comment.find({}).exec()
.then(commentsArr => {
  comments = [...commentsArr];
});

module.exports.list = function list(request, response) {
  Comment.find({}).exec()
.then(commentsArr => {
  comments = [...commentsArr];
  return response.json(comments);
});
  console.log(comments);
 
};

module.exports.show = function show(request, response) {
  const id = Number(request.params.id);
  return response.json(comments.find(index => index["_id"] === id));
};
module.exports.create = function create(request, response) {
  const newComment = new Comment(
    {_id: comments.length + 1, body: request.body.body, postId: 1}
      );
  newComment.save().then(savedComment => {
    comments.push(savedComment);
    return response.json(savedComment);
  });
};


module.exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};
module.exports.remove = function remove(request, response) {
  return response.json({});
};
  
