let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//let jwt = require('jsonwebtoken');

//connect with GamesModel
let Games = require('../models/games');



module.exports.displayGamesList = (req,res,next)=>{
    Games.find((err, gameslist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('games/list',{
                title:'Games', 
                Gameslist: gameslist,
                displayName: req.user ? req.user.displayName: ''
            })
        }
    });
}

module.exports.displayAddPage =(req,res,next)=>{
    res.render('games/add',{
        title:'Add Game',
        displayName: req.user ? req.user.displayName: ''})
}
module.exports.processAddPage = (req,res,next)=>{
    let newGame = Games ({
        "Name":req.body.Name,
        "Year":req.body.Year,
        "Review":req.body.Review,
        "Description":req.body.Description,
        "Rating":req.body.Rating,
        "Price":req.body.Price
    })
    Games.create(newGame,(err,Games) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/gameslist');
        }
    })
}

module.exports.displayEditPage=(req,res,next)=>{
    let id = req.params.id;
    Games.findById(id, (err,gameToEdit) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('games/edit', {title:'Edit game',
            games:gameToEdit,
            displayName: req.user ? req.user.displayName: ''});
        }
    })
}

module.exports.processEditPage=(req,res,next)=>{
    let id=req.params.id;
    let updateGames = Games({
        "_id":id,
        "Name":req.body.Name,
        "Year":req.body.Year,
        "Review":req.body.Review,
        "Description":req.body.Description,
        "Rating":req.body.Rating,
        "Price":req.body.Price
    })
    Games.updateOne({_id:id},updateGames,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/gameslist');
        }
    })
}

module.exports.performDelete=(req,res,next)=>{
    let id=req.params.id;
    Games.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/gameslist');
        }
    })
}