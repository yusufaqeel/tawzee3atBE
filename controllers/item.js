// Model
const Item = require("../models/Item");

// HTTP index get item

// HTTP GET - Item Index
exports.item_index_get = (req, res) => {
    Item.find()
    .then(items => {
        res.json({items:items})
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP Adding Item

exports.item_create_get = (req, res) => {
    res.render("item/add");
}

exports.item_create_post = (req, res) => {
    console.log(req.body);
    let item = new Item(req.body);
    // const imageURL = req.file.path.replace("public", "")
    // item.imageURL = imageURL

    // Save item
    item.save()
    .then((items)=>{
        res.json({items})
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later");
    });
}

// HTTP GET - Item by ID
exports.item_show_get = (req, res) => {
    console.log(req.query.id);
    Item.findById(req.query.id)
    .then(item => {
        res.json("item/detail", {item, moment})
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP GET - Load Item Edit Form
exports.item_edit_get = (req, res) => {
    Item.findById(req.query.id)
    .then(item => {
        res.json({item})
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP PUT - item Update
exports.item_update_put = (req, res) => {
    console.log(req.body._id);
    Item.findByIdAndUpdate(req.body._id, req.body, {new : true})
    .then((item) => {
        res.json({item})
    })
    .catch(err => {
        console.log(err)
    });
}

  // HTTP DELETE -  Item
  exports.item_delete_get = (req, res) => {
    console.log(req.query.id);
    Item.findByIdAndDelete(req.query.id)
    .then((item)=>{
        res.json({item})
    })
    .catch(err => {
        console.log(err);
    })
};