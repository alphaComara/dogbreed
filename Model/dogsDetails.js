const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Employee schema
 let DogsDetails = new Schema({
    breed : {type:String},
    height_low_inches : {type:Number},
    height_high_inches : {type:Number},
    weight_low_lbs : {type:Number},
    weight_high_lbs : {type:Number}
 },{
 collection: 'dogsDetails'
 });
 
 module.exports = mongoose.model('dogsDetails', DogsDetails);