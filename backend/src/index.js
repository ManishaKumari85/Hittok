const express = require("express")
const app = express()
const mongoose = require("mongoose")
const route = require("./route/route")
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use("/",route)

mongoose.connect("mongodb+srv://ManishaKumari:Manisha85@cluster0.jp7k75q.mongodb.net/Hittok?retryWrites=true&w=majority",{useNewUrlParser:true})

.then(()=>{
    console.log("mongoDB connected")
})
.catch((err)=>{
console.log("error",err.message)
})

app.listen(process.env.PORT || 5000 , function(){
console.log("Server is Running on port 5000")
})







