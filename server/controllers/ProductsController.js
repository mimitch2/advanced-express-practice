const Product = require( "../models/products.js");
let products = [];

Product.find({}).exec()
.then(productsArr => {
  products = [...productsArr];
});


module.exports.list = function list(request, response) {
  Product.find({}).exec()
.then(productsArr => {
  products = [...productsArr];
  return response.json(products);
});
  console.log(products);
 
};

module.exports.show = function show(request, response) {
  const id = Number(request.params.id);
  return response.json(products.find(index => index["_id"] === id));
};

module.exports.create = function create(request, response) {
  const input = request.body;
  const newProduct = new Product(
    {_id: products.length + 1, name: input.name, description: input.description}
      );
  newProduct.save().then(savedProduct => {
    products.push(savedProduct);
    return response.json(savedProduct);
  });
};


// module.exports.create = function create(request, response) {
//   const input = request.body;
//   const newObj = 
//     {_id: products.length + 1, name: input.name, description: input.description, 
//       reviews: [], rating: null, imgUrl: null, price: null, category: null};
//   return response.json(products.push(newObj));
// };

module.exports.update = function update(request, response) {
  return response.json({theId: request.params.id});
};
module.exports.remove = function remove(request, response) {
  return response.json({});
};
  
