let mongoose = require('mongoose');
//create games model
let gamesModel = mongoose.Schema({
    Name: String,
    Year: Number,
    Review: String,
    Description: String,
    Rating: String,
    Price: Number
},
{
    collection: "games"
})
module.exports=mongoose.model('games', gamesModel)

