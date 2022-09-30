const mongoose = require("mongoose");

const DB = "mongodb+srv://dbuser2:dbadmin2@cluster0.od8n4ng.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=> console.log("connection successful")).catch((error)=> console.log(error.message));