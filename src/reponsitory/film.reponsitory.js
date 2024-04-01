 const db=require("../config/mysql.config.js")

 async function addFilm(filmName,poster,trailer,url,describe,date) {
     const [rows]= await db.execute('INSERT INTO film (filmName,poster,trailer,url,`describe`) VALUES(?,?,?,?,?)', [filmName,poster,trailer,url,describe])
     return rows
 }

 async function getFilm() {
    const [rows]= await db.execute('SELECT * FROM film INNER JOIN film_category ON film.filmId=film_category.filmId INNER JOIN category ON film_category.categoryId= category.categoryId')
    return rows
}
async function getOnlyFilm() {
    const [row]= await db.execute('SELECT * FROM film')
    return row
}
 async function getFilmById(filmId) {
     const [rows]= await db.execute('SELECT * FROM film WHERE filmId = ?', [filmId])
     return rows[0]
 }
async function setFilmVip(filmId,vip) {
    console.log(filmId,vip);
    const [rows]= await db.execute('UPDATE film SET filmVip = ? WHERE filmId = ?', [vip,filmId])
    return rows
    
}

async function filmUpdate(filmId,filmEdit) {
   
    const [rows]= await db.execute('UPDATE film SET filmName = ?, poster = ?, trailer = ?, url = ?, `describe` = ?  WHERE filmId = ?', [filmEdit.filmName,filmEdit.poster,filmEdit.trailer,filmEdit.url,filmEdit.describe,filmId])
    return rows
    
}

async function deleteF(filmId) {
    const [rows]= await db.execute('DELETE FROM film WHERE filmId = ?', [filmId])
    return rows
}

const getFilmNewDate=async()=>{

    const [rows]= await db.execute('SELECT * FROM film ORDER BY date DESC LIMIT 1')
    return rows[0]
}

 module.exports = {addFilm,getFilm,getOnlyFilm,setFilmVip,getFilmById,filmUpdate,deleteF,getFilmNewDate}