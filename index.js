import express from 'express';

const app = express()

app.get("/",(req,res)=>{
    res.send("My Api is running on ec2 instances changed😊")
})


app.listen(5000,()=>console.log("Server is listening in port 5000"))
