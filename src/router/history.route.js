const { addHistory, getUserHistory, deleteHistoryById } = require("../controller/history.controller")


const historyRouter =(app)=>{
    app.post("/api/v1/history",addHistory)
    app.get("/api/v1/history/:id",getUserHistory)
    app.delete("/api/v1/history/:id",deleteHistoryById)
}

module.exports = {historyRouter}