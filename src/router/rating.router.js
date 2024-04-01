const { getRatingByFilm, addcomment } = require("../controller/rating.controller")


const ratingRouter =(app)=>{
    app.get("/api/v1/rating/:id",getRatingByFilm)
    app.post("/api/v1/rating/:id",addcomment)
}

module.exports = {ratingRouter}