require("dotenv").config();
const express = require("express");
const app = express ();
const mongoose = require("mongoose");
require("./db/conn");
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");

const port = 5000;


const CONNECTION_URL = 'mongodb+srv://dbuser2:dbadmin2@cluster0.od8n4ng.mongodb.net/mernstack?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {  
    useNewUrlParser:true,

    useUnifiedTopology:true // ---------> Depreacted No Need of this 
})
.then(() => app.listen(PORT, () => 
console.log(`Connection is established and running on port: ${PORT}`)
))
.catch((err) => console.log(err.message)
);

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("server start")
})
app.use(router);

// app.listen(port, ()=>{
//     console.log(`server is running at port number ${port}`);
// });