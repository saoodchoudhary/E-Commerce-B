const CategoryModel = require("../../models/Admin/Category/Category");
const ChildCategoryModel = require("../../models/Admin/Category/ChildCategory");
const SubCategoryModel = require("../../models/Admin/Category/SubCategory");

// Post Method
const handlePostCategory = async (req, res) => {
    console.log(req.body);

    CategoryModel.create(req.body)
        .then(() => {
            console.log("kaam fateh");
            res.send("success hogaya hai");
        })
        .catch((err) => {
            console.log(err);
            res.send("eror");
        });
};

// Post Method
const handlePostSubCategory = async (req, res) => {
    console.log(req.body);

    SubCategoryModel.create(req.body)
        .then(() => {
            console.log("kaam fateh");
            res.send("success hogaya hai");
        })
        .catch((err) => {
            console.log(err);
            res.send("eror");
        });
};

// Post Method
const handlePostChildCategory = async (req, res) => {
    console.log(req.body);

    ChildCategoryModel.create(req.body)
        .then(() => {
            console.log("kaam fateh");
            res.send("success hogaya hai");
        })
        .catch((err) => {
            console.log(err);
            res.send("eror");
        });
};

//Get Method
const handleGetMainCategory = async (req, res)=>{
  const getCategory = await  CategoryModel.find({})
  res.json({
    success:true,
    getCategory
  })
}

const handleGetSubCategory = async (req, res)=>{
  const getCategory = await  SubCategoryModel.find({})
  res.json({
    success:true,
    getCategory
  })
}

const handleGetChildCategory = async (req, res)=>{
  const getCategory = await  ChildCategoryModel.find({})
  res.json({
    success:true,
    getCategory
  })
}

const handleGetSpecificSubCategory = async (req, res)=>{
    const {categoryName} = req.body;
  const getCategory = await  SubCategoryModel.find({categoryName:categoryName})
  res.json({
    success:true,
    getCategory
  })
}
const handleGetSpecificChildCategory = async (req, res)=>{
    const {subCategoryName, categoryName} = req.body;
  const getCategory = await  ChildCategoryModel.find({subCategoryName:subCategoryName, categoryName, categoryName})
  res.json({
    success:true,
    getCategory
  })
}

module.exports = {
    handlePostCategory,
    handlePostSubCategory,
    handlePostChildCategory,
    handleGetMainCategory,
    handleGetSubCategory,
    handleGetChildCategory,
    handleGetSpecificSubCategory,
    handleGetSpecificChildCategory
};
