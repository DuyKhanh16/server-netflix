const { getRatingByIdFlim, addCommentById } = require("../reponsitory/rating.reponsirtory")

async function getRatingByFilm(req,res) {
    const reslut=await getRatingByIdFlim(req.params.id)
    res.status(200).json({message:"Lấy Thành Công",data:reslut})
}
async function addcomment(req,res){
    const id=req.params.id
    const newComment=req.body.newComent
    const filmId=req.body.id
    const reslut= await addCommentById(id,filmId,newComment)
    res.status(201).json({message:"Đã Comment"})
}
module.exports = {getRatingByFilm,addcomment}