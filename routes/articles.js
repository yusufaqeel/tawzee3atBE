const express = require('express');

const router = express.Router();

router.use(express.urlencoded({ extended: true }));

// Require isLoggedIn
const isLoggedIn = require("../helper/isLoggedIn");

let methodOverride = require("method-override");
router.use(methodOverride('_method'))

// Controller
const articleCntrl = require("../controllers/articles");

// Routes
router.get("/article/add", articleCntrl.article_create_get);
router.post("/article/add", articleCntrl.article_create_post);

router.get("/article/index", articleCntrl.article_index_get);
router.get("/article/detail", articleCntrl.article_show_get);

router.get("/article/edit", articleCntrl.article_edit_get);
router.put("/article/update", articleCntrl.article_update_put);

router.get("/article/delete", articleCntrl.article_delete_get);

module.exports = router;