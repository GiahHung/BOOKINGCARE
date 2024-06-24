import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
import initWebRouter from "./route/web";
import connectDB from "./config/connectDB";
require("dotenv").config();

let app = express();

// app config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

configViewEngine(app);
initWebRouter(app);

connectDB();

let port = process.env.PORT || 6969;

app.listen(port, ()=>{
    console.log("BackEnd NodeJs is running on port: "+ port);
});