// Dependencies
const express = require('express');

// Initialize Router functionality
const router = express.Router();

// Controller
const indexCntrl = require('../controllers/index');

// Routes
router.get("/", indexCntrl.index_get);


// Export to other files
module.exports = router;