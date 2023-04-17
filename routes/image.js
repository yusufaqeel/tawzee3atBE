// Dependencies
const express = require('express');

// Model
const Image = require("../models/Image")
const Item = require("../models/Item");

// Initialize Router functionality
const router = express.Router();

// Cloudinary Service
const uploadToCloudinary = require('../services/cloudinary')
// router.use(express.urlencoded({extended: true}))
router.use(express.json())
// Multer Middelware
const upload = require('../middeleware/upload')

// POST - Upload Image
router.post("/image/upload", upload.any("image"), async (req, res) => {
    try {
        console.log("req.body, req.body", req.files);
        // console.log("req.body, req.body", req.body);
        console.log(req.query.id);

        // Loop Through Selected Files - "req.files" is part of Multer Middleware when uploading multiple files, "req.file" is for a single file
        for (let i = 0; i < req.files.length; i++) {
            // // Create Image
            // const item = new Item()
            // await item.save()

            // Upload Image to Cloudinary - "uploaded=images" is a folder I created on the Cloudinary website, you can make one and name it anything
            const data = await uploadToCloudinary(req.files[i].path, "uploaded-images");

            
            // Update Item here
                // Save imageUrl and publicId to MongoDB
                await Item.updateOne(
                    {_id: req.query.id},
                    {
                        $set: {
                            imageUrl: data.url,
                            publicId: data.public_id,
                        },
                    }
                )
        }
        res.status(200).send("Item addeed successfully with Image(s)")
    }
    catch (err) {
        res.status(400).send(err)
    }
})

// Export to other files
module.exports = router;