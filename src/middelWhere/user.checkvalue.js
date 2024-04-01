
function checkValue(req,res,next) {
    const {email,password,userName}=req.body
    if(!email || !password || !userName) {
        return res.status(400).json({message:"Thông tin chưa đầy đủ"})
    }
    next()
}

function checkLogin(req,res,next) {
    const {email,password}=req.body
    if(!email || !password ) {
        return res.status(400).json({message:"Thông tin chưa đầy đủ"})
    }
    next()
}



module.exports ={checkValue,checkLogin,}