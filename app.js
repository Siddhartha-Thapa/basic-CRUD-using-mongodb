const express = require('express');
const app = express();
const usermodel = require('./usermodel');

app.get('/', function(req, res){
    res.send("hello");
});
app.get('/create', async(req, res)=>{
    let createduser = await usermodel.create({
        name: "Kamal",
        username: "kamal123",
        email: "kamal@gmail.com"
    
    });
    res.send(createduser);
});


app.listen("3000");