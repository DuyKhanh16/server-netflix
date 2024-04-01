const db=require("../config/mysql.config.js")

const getAllCategory = async()=>{

    const [rows]= await db.execute("SELECT * FROM category")
    return rows
}

const getCategoryByName = async(name)=>{
    const [rows]= await db.execute("SELECT * FROM category WHERE categoryName = ?", name)
    return rows[0]
}

const addNewCategory = async(name)=>{

    const [rows]= await db.execute("INSERT INTO category (categoryName) VALUES(?)", name)
    return rows
}
const addCategoryFilm=async(arrCategory,filmId)=>{
    arrCategory.map(async(e)=>{
        const [rows]= await db.execute("INSERT INTO film_category (categoryId,filmId) VALUES(?,?)", [e.categoryId,filmId])
    })
}
const getCategoryById = async(id)=>{
    console.log(id);
    const [rows]= await db.execute(`SELECT * FROM film_category INNER JOIN category ON film_category.categoryId = category.categoryId WHERE filmId = ${id}`)
    return rows
}
module.exports = {getAllCategory,getCategoryByName,addNewCategory, addCategoryFilm,getCategoryById}