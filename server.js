const express = require("express");
const product = require("./data.js")
const app = express();

const Port = 5000;

app.get("/", (req , res)=>{
    res.send("hello world")
})

app.get("/product" ,(req , res)=>{
   
    res.send(product)
})

app.get("/product/:category" ,(req , res)=>{
    
    let a = product.filter((e)=> e.brand.toLowerCase() == req.params.category.toLowerCase());
    res.send(a)
})
app.get("/product/brand/:price" ,(req , res)=>{
    
    let b= product.filter((e)=> e.price > req.params.price );
    res.send(b)
})

app.listen(Port, ()=> {
    console.log(`server is running on ${Port}`);
})