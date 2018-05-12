
const Comment = require( "../models/comments.js");
let comments = [];

// fix how do I do this without reassigning comments??

const updateData = () => {
  Comment.find({}).exec().then(commentsArr => {
    comments = commentsArr;
    console.log(comments);
  });
};

updateData();

module.exports.list = function list(request, response) {
  Comment.find({}).exec().then(commentsArr => {
    return response.json(commentsArr);
  });
  // console.log(comments);
};

module.exports.show = function show(request, response) {
  const id = request.params.id;
  Comment.find({_id: id}).exec().then(commentRes => {
    return response.json(commentRes[0]);
  });
};

module.exports.create = function create(request, response) {
  updateData();
  const id = comments[comments.length - 1]._id + 1;  
  const newComment = new Comment(
    {_id: id , body: request.body.body, postId: 1}
      );
  newComment.save().then(savedComment => {
    updateData();
    return response.json(savedComment);
  });
};

module.exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};
module.exports.remove = function remove(request, response) {
  return response.json({});
};
  
