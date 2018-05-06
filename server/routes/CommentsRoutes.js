const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} = require( "../controllers/CommentsController");


router.get("/comments", list);
router.get("/comment/:id", show);
router.post("/comments", create);
router.put("/comment/:id", update);
router.delete("/comment/:id", remove);

module.exports = router;
