const { getAllCategory, addNewCategory, getCategoryById } = require("../reponsitory/category.reponstory")

async function getCategory(req,res){
 const result= await getAllCategory()
 res.status(200).json({
message:"thành công",
  data:result
})
}

async function addCategory(req,res) {
    const name= req.body
  const resul= await addNewCategory(name)
  res.status(201).json(
      message="Thêm thành công"
  )
}

async function getCategoryByFilmId(req,res) {
  const id= req.params.id
  const reslut=await getCategoryById(id)
  
  res.status(200).json({message:"Thành Công",data:reslut})
}

module.exports = {getCategory,addCategory,getCategoryByFilmId}