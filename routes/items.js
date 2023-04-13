const express = require('express');

const router = express.Router();

router.use(express.json());
// same as in controller we use json becuase they are different apps frontend and backend

let methodOverride = require("method-override");
router.use(methodOverride('_method'));

// Require isLoggedIn
const isLoggedIn = require("../helper/isLoggedIn");

// Controller
const itemCntrl = require("../controllers/item");

// Routes
router.get("/item/add", itemCntrl.item_create_get);
router.post("/item/add", itemCntrl.item_create_post);

router.get("/item/index", itemCntrl.item_index_get);
router.get("/item/detail", itemCntrl.item_show_get);

router.get("/item/edit", itemCntrl.item_edit_get);
router.put("/item/update", itemCntrl.item_update_put);

router.delete("/item/delete", itemCntrl.item_delete_get);

module.exports = router;