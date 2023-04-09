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

router.get("/author/index", authorCntrl.author_index_get);
router.get("/author/detail", authorCntrl.author_show_get);

router.get("/author/edit", authorCntrl.author_edit_get);
router.put("/author/update", authorCntrl.author_update_put);

router.delete("/author/delete", authorCntrl.author_delete_get);

module.exports = router;