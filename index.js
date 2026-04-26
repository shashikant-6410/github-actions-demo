import express from 'express'

const app = express();

let PORT=process.env.PORT ?? 8080 ;

app.get('/home',(req,res)=>{
    return res.json({msg:"welcome to github-actions demo"});
})

app.listen(PORT,(req,res)=>{
    console.log(`server is running on port : ${PORT}`);
})