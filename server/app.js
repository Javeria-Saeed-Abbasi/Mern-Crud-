require("dotenv").config();
const express = require("express");
const app = express ();
const mongoose = require("mongoose");
require("./db/conn");
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");

const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("server start")
})
app.use(router);

app.listen(port, ()=>{
    console.log(`server is running at port number ${port}`);
});