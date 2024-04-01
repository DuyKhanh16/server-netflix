const { addHistoryById, getHistoryByIdFlim, getUserHistoryById, deleteHistoryId } = require("../reponsitory/history.repostory")

 

async function addHistory(req,res) {
    const {flimId,userId}=req.body
    const check=await getHistoryByIdFlim(flimId)
    if (check) {
        res.status(202).json({message:"Phim đã tồn tại"})
    }else{
        const reslut= await addHistoryById(flimId,userId)
    res.status(201).json({message:"Đã Lưu Phim"})
    }
    
}

async function getUserHistory(req,res) {
    const userId=req.params.id
const reslut=await getUserHistoryById(userId)
res.status(200).json({message:"Lấy Thành Công",data:reslut})
}

async  function deleteHistoryById(req,res) {
    const id=req.params.id
    console.log(id);
    const reslut=await deleteHistoryId(id)
    res.status(201).json(message="Đã Xóa Thành Công")
}
module.exports = {addHistory,getUserHistory,deleteHistoryById}