const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} = require( "../controllers/ProductsController");


router.get("/products", list);
router.get("/product/:id", show);
router.post("/products", create);
router.put("/product/:id", update);
router.delete("/product/:id", remove);

module.exports = router;
