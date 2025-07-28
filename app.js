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
    })
    res.send(createduser);
})

// app.get('/update', async(req, res)=>{
//     let updateduser = await usermodel.findOneAndUpdate(
//         {
//             username: "kamal123"
//         },
//         {
//             name: "siddhartha thapa",
//             username: "siddhartha123",
//             email: "sid@gmail.com"
//         },
//         {
//             new: true
//         }
//     )
//     res.send(updateduser);
// })

app.get("/read", async(req, res)=>{
    let users = await usermodel.find();
    res.send(users);
});

app.listen("3000");

app.get('/delete', async(req, res)=>{
    let users = await usermodel.findOneAndDelete({
        username: "siddhartha123"
    });
    res.send(users);
})