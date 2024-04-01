const { getCategory, addCategory, getCategoryByFilmId } = require("../controller/category.controller");
const { checkCategoryEmty, checkCategory } = require("../middelWhere/category.midelWherw");
const checkToken = require("../middelWhere/checkToken");

const categoryRouter =(app)=>{
    app.get('/api/v1/category',getCategory)
    app.get('/api/v1/category/:id',getCategoryByFilmId)
    app.post('/api/v1/category',checkToken,checkCategoryEmty,checkCategory,addCategory)
//     app.put('/api/v1/categories/:id',updateCategory)
//     app.delete('/api/v1/categories/:id',deleteCategory
 }

 module.exports = {categoryRouter}