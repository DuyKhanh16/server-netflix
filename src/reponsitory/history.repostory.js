const db=require("../config/mysql.config.js")
async function getHistoryByIdFlim(filmId) {
    const [rows]= await db.execute('SELECT * FROM history  WHERE history.filmId = ?', [filmId])
    return rows[0]
}
async function addHistoryById(filmId,userId) {
    const [rows]= await db.execute('INSERT INTO history (filmId,userId) VALUES(?,?)', [filmId,userId])
    return rows
    
}

async function getUserHistoryById(userId) {
    const [row]=await db.execute('SELECT * FROM history JOIN film ON history.filmId = film.filmId WHERE history.userId = ?', [userId])
    return row
}

async function deleteHistoryId(id) {
    const [rows]= await db.execute('DELETE FROM history WHERE historyId = ?', [id])
    return rows
}
module.exports = {addHistoryById,getHistoryByIdFlim,getUserHistoryById,deleteHistoryId}