const express = require("express");
const { handlePostCategory, handlePostSubCategory, handlePostChildCategory, handleGetMainCategory, handleGetSubCategory, handleGetChildCategory, handleGetSpecificSubCategory, handleGetSpecificChildCategory } = require("../../controllers/Admin/Category");
const router = express.Router();

// Post Method
router.post("/mainCategory", handlePostCategory)

router.post("/subCategory", handlePostSubCategory)

router.post("/childCategory", handlePostChildCategory)


// Get Method -- Get All Category
router.get("/getMainCategory",handleGetMainCategory)

router.get("/getSubCategory",handleGetSubCategory)

router.get("/getChildCategory",handleGetChildCategory)


//Get Method -- Get Specific Category
router.get("/getSpecific/subCategory",handleGetSpecificSubCategory)

router.get("/getSpecific/childCategory",handleGetSpecificChildCategory)


module.exports = router;