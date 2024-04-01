const db=require("../config/mysql.config.js")

async function getUserByEmail(email) {
    const [user]= await db.execute("SELECT * FROM users WHERE email = ?", [email])
    return user[0]
}

async function  createUser(userName,email,password,avata) {
  const [rows]=   await db.execute("INSERT INTO users (userName,email,password,avata) VALUES(?,?,?,?)", [userName,email,password,avata],)
   return rows
    
}
async function getUsers() {
  const [result]= await db.execute("SELECT * FROM users WHERE role=0")
  return result
}

async function  getUserById(id) {
  const [result]= await db.execute("SELECT * FROM users WHERE userId = ?", [id])
  return result[0]
}
async function editStatus(id,status) {
  const result= await db.execute("UPDATE users SET status = ? WHERE userId = ?", [status,id])
}
async function updateVip(userId,userVip) {
  const row= await db.execute('UPDATE users SET userVip = ? WHERE userId = ?', [userVip,userId])
  return row
}
module.exports = {getUserByEmail,createUser,getUsers,getUserById ,editStatus,updateVip}