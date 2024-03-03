const express = require('express')
const app = express()

port = 5000

app.get('/',(req,res)=>{
    res.json({"name":"Mahir"})
})

app.listen(port,()=>{
    console.log(`server running at port: ${port}`);
})
