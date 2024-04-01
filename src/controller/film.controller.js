const { addCategoryFilm } = require("../reponsitory/category.reponstory")
const { addFilm, getFilm, getOnlyFilm, setFilmVip, getFilmById, filmUpdate, deleteF, getFilmNewDate, filmPublic } = require("../reponsitory/film.reponsitory")


async function upFilm(req,res) {
   const {filmName,poster,trailer,url,describe}=req.body.film
   const arrcategory= req.body.category
 const result=  await addFilm(filmName,poster,trailer,url,describe)
 await addCategoryFilm(arrcategory,result.insertId)
   res.status(201).json({message:"Thêm Vào Thành Công"})
}

async function getAllFilm(req,res) {
  const arr=await getFilm()
  const arr1= await getOnlyFilm()
  res.status(200).json({message:"Lấy Thành Công",data:arr,data1:arr1})
}

async function setVip(req,res) {
  const filmId= req.params.id
  const film=await getFilmById(filmId)
 if (film.filmVip==0) {
  const result= await setFilmVip(filmId,1)
 res.status(201).json({message:"Đổi VIP Thành Công"})
 } else {
  const result= await setFilmVip(filmId,0)
 res.status(201).json({message:"Đổi VIP Thành Công"})
 }
 
}

async function editFilm(req,res) {
  const filmId= req.params.id
  const filmEdit=req.body
  const result= await filmUpdate(filmId,filmEdit)
  res.status(201).json(message=" Update Thành Công")
}
async function deleteFilm(req,res) {
  const filmId= req.params.id
  const result= await deleteF(filmId)
  res.status(201).json(message="Xóa Thành Công")
}

async function getNewFilm(req,res) {
  const result= await getFilmNewDate()
  res.status(200).json({message:"Lấy Thành Công",data:result})
}

async function getById(req,res) {
  const {id}=req.params
  const result=await getFilmById(id)
  res.status(200).json({message:"Lấy Thành Công",data:result})
}
module.exports = {upFilm,getAllFilm,setVip,editFilm,deleteFilm,getNewFilm,getById}