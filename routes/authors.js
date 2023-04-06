const express = require('express');

const router = express.Router();

router.use(express.json());
// same as in controller we use json becuase they are different apps fronyend and backend

let methodOverride = require("method-override");
router.use(methodOverride('_method'));

// Require isLoggedIn
const isLoggedIn = require("../helper/isLoggedIn");

// Controller
const authorCntrl = require("../controllers/authors");

// Routes
router.get("/author/add", authorCntrl.author_create_get);
router.post("/author/add", authorCntrl.author_create_post);

router.get("/author/index", authorCntrl.author_index_get);
router.get("/author/detail", authorCntrl.author_show_get);

router.get("/author/edit", authorCntrl.author_edit_get);
router.put("/author/update", authorCntrl.author_update_put);

router.delete("/author/delete", authorCntrl.author_delete_get);

module.exports = router;