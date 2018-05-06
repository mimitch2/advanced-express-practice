const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} = require( "../controllers/VehiclesController");


router.get("/vehicles", list);
router.get("/vehicle/:id", show);
router.post("/vehicles", create);
router.put("/vehicle/:id", update);
router.delete("/vehicle/:id", remove);

module.exports = router;
