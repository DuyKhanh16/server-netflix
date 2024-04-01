const db=require("../config/mysql.config.js")

async function getRatingByIdFlim(id) {
    const [rows]= await db.execute('SELECT * FROM rating INNER JOIN users ON rating.userId=users.userId  WHERE rating.filmId = ?', [id])
    return rows
    
}

async function addCommentById(id,filmId,newComment) {
  const row=  await db.execute('INSERT INTO rating (filmId,userId,comment) VALUES(?,?,?)', [filmId,id,newComment])
    return row
}
module.exports = {getRatingByIdFlim,addCommentById}