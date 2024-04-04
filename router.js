const express = require("express");
const Article = require("./article");
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('create');
})
router.put('/:id',(req,res)=>{

})

router.post('/',async(req,res)=>{
    article = new Article({
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
        createdAt: new Date()
    })
    console.log(req.body);
    try{
        article = await article.save();
        // res.redirect(`/${article.id}`)
        res.redirect("/");
    }catch(err){
        console.log(err)
    }
})



module.exports = router;