const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    productName:{
        type: String,
        required: true
    },
    stock:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    productId:{
        type: String,
        required: true,
        unique:true
    },
    mainCategory:{
        type: String,
        required: true,
    },
    subCategory:{
        type: String,
        required: true,
    },
    childCategory:{
        type: String,
        required: true,
    },
    productDescription:{
        type: String,
        required: true,
    },
    productReturnPolicy:{
        type: String,
    },
    currentPrice:{
        type: String,
        required: true
    },
    previousPrice:{
        type: String,
        required: true
    },
    tag:{
        type: String,
    },

});


const AddProductModel = mongoose.Model("product", ProductSchema);

module.exports = AddProductModel;
