
async function checkValueFlim(req,res,next) {
    const newFilm=req.body.film
    const arr=req.body.category
    if (newFilm.filmName==""||newFilm.poster==""||newFilm.trailer==""||newFilm.url==""||newFilm.describe=="") {
        res.status(400).json(message="vui lý nhap day du thong tin")
    }else if (arr.lenght==0) {
        res.status(400).json(message="vui lý chọn category")
    }else {
        next()
        
    }
}

module.exports = {checkValueFlim}