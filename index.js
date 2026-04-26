import express from 'express'

const app = express();

let PORT=process.env.PORT ?? 8080 ;

app.get('/home',(req,res)=>{
    return res.json({msg:"welcome to github-actions demo FOR YOU"});
})

app.get('/about',(req,res)=>{
    return res.json({msg:"I am a developer!"});
})

app.listen(PORT,(req,res)=>{
    console.log(`server is running on port : ${PORT}`);
})