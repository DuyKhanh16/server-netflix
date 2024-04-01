const { getUserByEmail, createUser, getUsers,  getUserById, editStatus, updateVip } = require("../reponsitory/user.reponsitory")
require("dotenv").config()
const jwt=require("jsonwebtoken")
const argon2 = require('argon2')


async function register(req,res) {
    const {email,password,userName,avata}=req.body
    const user=await getUserByEmail(email)
    if(user){
        res.status(400).json({message:"email đã tồn tại"})
    } else {
        const hash=await argon2.hash(password)
      const result=  await createUser(userName,email,hash,avata)
      console.log(result);
        res.status(201).json({
            message:"Đăng ký Thành Công",
    })
    }
   
}
async function login(req,res){
    const {email,password}=req.body
    const user=await getUserByEmail(email)
    const argon=await argon2.verify(user.password,password)
    if (user) {
        if(argon){
            const token=jwt.sign({user},process.env.SECRET_KEY)
            res.status(200).json({
                message:"đăng nhap thành công",
                token:token,
                user:user
            })
        } else {
            res.status(400).json({
                message:"sai mật khẩu",
            })
        
    }
}else {
    res.status(400).json({
        message:"sai email",
    })
}
}

async function getAllUsers(req,res) {
    const result= await getUsers()
    res.status(200).json({
        message:"danh sách người dùng",
        data:result
    })
}

async function banUser(req,res) {
    const id=req.params.id
    const result= await getUserById(id)
    console.log(result);
    if (result.status==="active") {
        const result= await editStatus(id,"ban")
        res.status(200).json({
            message:"banned user",
            data:result
        })
    } else {
       const result= await editStatus(id,"active")
       res.status(200).json({
           message:"unbanned user",
           data:result
       })
        
    }
}
async function upVip2(req,res) {
    const userId=req.params.id
    console.log(userId);
    const {userVip}=req.body
    const resilt=await updateVip(userId,userVip)
    res.status(201).json({massage:"Thành công"})
}
module.exports = {register,login,getAllUsers,banUser,upVip2}