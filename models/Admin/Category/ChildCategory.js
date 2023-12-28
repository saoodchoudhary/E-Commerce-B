const mongoose = require("mongoose")

const ChildCategorySchema = new mongoose.Schema({
    categoryName:{
        type: String, 
        required: true, 
    },
    subCategoryName:{
        type: String, 
        required: true, 
    },
    childCategoryName:{
        type: String, 
        required: true, 
        unique: true
    }

})

const ChildCategoryModel =  mongoose.model("childCategory", ChildCategorySchema)

module.exports = ChildCategoryModel;