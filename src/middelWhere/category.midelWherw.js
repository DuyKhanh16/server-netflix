const { getCategoryByName } = require("../reponsitory/category.reponstory")

function checkCategoryEmty(req,res,next) {
    const name=req.body
    if(!name) {
        return res.status(400).json({message:"thể nhap ten"})
    }
    next()
    
}
async function checkCategory(req,res,next) {
    const name=req.body
    const result= await getCategoryByName(name)
    console.log(result);
    if (result) {
     return  res.status(400).json({message:"ten da ton tai"})
    }
    next()
}

module.exports={checkCategoryEmty,checkCategory}