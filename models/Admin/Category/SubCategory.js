const mongoose = require("mongoose")

const SubCategorySchema = new mongoose.Schema({
    categoryName:{
        type: String, 
        required: true, 
    },
    subCategoryName:{
        type: String, 
        required: true, 
        unique: true
    }

})

const SubCategoryModel =  mongoose.model("subCategory", SubCategorySchema)

module.exports = SubCategoryModel;