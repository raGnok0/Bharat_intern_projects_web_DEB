const express = require('express');
const mongoose = require('mongoose');
const app = express();
const route = require("./router");
const Article = require("./article")
//mongodb connection
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.5gyhjza.mongodb.net/blogwebsite?retryWrites=true&w=majority&appName=Cluster0`).then(()=>{
    console.log("Database connected");
}).catch( err => console.log("not connected"));

//ejs set
app.set('view engine','ejs')
app.use(express.urlencoded({extended: false}));
// app.get('/',(req,res)=>{
//     const article = [{
//         title: 'Test article',
//         createdAt: new Date(),  
//         description: "Test Description"
//     }]
//     res.render('index',{article:article})
// })

app.use("/create",route)

//showing the database data article
app.get("/",async(req,res)=>{
    const article = await Article.find();
    res.render('index',{article:article})
})

app.listen(3000)
