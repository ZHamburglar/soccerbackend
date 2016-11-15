const mongoose = require('mongoose');


var soccerPlayerSchema = {
    name: String,
    //whoscored URL
    wsurl: String,
    //Transfermarkt URL String
    tmurl: String,
    imageName: String,
    position: String,
    age: Number,
}
var Soccerplayer = mongoose.model('Soccerplayer', soccerPlayerSchema);

module.exports = Soccerplayer;
