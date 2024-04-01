const { register, login, getAllUsers, banUser, upVip2 } = require("../controller/user.controler")
const checkToken = require("../middelWhere/checkToken")
const { checkValue, checkLogin } = require("../middelWhere/user.checkvalue")

const userRouter =(app)=>{
    app.post('/api/v1/users/register',checkValue,register )
    app.post('/api/v1/users/login',checkLogin,login)
    app.get("/api/v1/users",getAllUsers)
    app.put("/api/v1/users/:id",checkToken,banUser)
    app.patch("/api/v1/user/:id",upVip2)
}

module.exports = {userRouter}