const adminModel = require("../model/adminModel")

const signup = async function (req,res){
try{
let data = req.body
const {name,email,password}=data
if(Object.keys(data).length==0)  return   res.status(400).send({satus:false,message:"provied same data"})  
if(!name) return   res.status(400).send({satus:false,message:"enter your name"})  
if(!email) return   res.status(400).send({satus:false,message:"enter your email"})  
if(!password) return   res.status(400).send({satus:false,message:"enter your password"})  

let saveData = await adminModel.create(data)
res.status(201).send({status:true,data:saveData,message:"admin register"})

}catch(err){
  res.status(500).send({satus:false,error:err.message})}
}

const login = async function (req,res){
    const data = req.body
    const{email,password} = data
    if(!email) return   res.status(400).send({satus:false,message:"enter your email"})  
   if(!password) return   res.status(400).send({satus:false,message:"enter your password"})  
const checkadmin = await adminModel.findOne({email:email,password:password})
if(!checkadmin) return res.status(404).send({satus:false,message:"admin not found"}) 
return res.status(200).send({status:true,message:"login successful"}) 
}




module.exports = {signup,login}