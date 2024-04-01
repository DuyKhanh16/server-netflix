const { upFilm, getAllFilm, setVip, editFilm, deleteFilm, getNewFilm, getById,  } = require("../controller/film.controller");
const checkToken = require("../middelWhere/checkToken");
const { checkValueFlim } = require("../middelWhere/film.Check");
const flimRouter =(app)=>{
    app.post("/api/v1/film",checkToken,checkValueFlim,upFilm)
    app.put("/api/v1/films/update/:id",checkToken,editFilm)
    app.get("/api/v1/films/public",getAllFilm)
    app.get("/api/v1/films/newfilm",getNewFilm)
    app.get("/api/v1/films/:id",getById)
    app.get("/api/v1/films",checkToken,getAllFilm)
    app.put("/api/v1/films/vip/:id",checkToken,setVip)
    app.delete("/api/v1/films/:id",checkToken,deleteFilm)

}

module.exports = {flimRouter}