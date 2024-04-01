const express=require("express")
const app= express()

const bodyParser = require('body-parser')
const cors = require("cors");
app.use(cors({
    origin: "*"
}));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
require("dotenv").config()

const {userRouter}=require("./src/router/user.route")
const {categoryRouter}=require("./src/router/category.route");
const { flimRouter } = require("./src/router/flim.router");
const { ratingRouter } = require("./src/router/rating.router");
const { historyRouter } = require("./src/router/history.route");


userRouter(app)
categoryRouter(app)
flimRouter(app)
ratingRouter(app)
historyRouter(app)
app.listen(process.env.PORT,()=>{
    console.log("run PORT");
})