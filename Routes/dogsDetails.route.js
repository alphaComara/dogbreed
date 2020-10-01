// Importing important packages
const express = require('express');
 
// Using express and routes
const app = express();
const dogsRoute = express.Router();

// dogs module which is required and imported
let dogsModel = require('../Model/dogsDetails');

// To Get List Of dogss
dogsRoute.route('/').get(function (req, res) {
    dogsModel.find(function (err, dogs) {
        if (err) {
            console.log(err);
        }
        else {
        res.json(dogs);
        }
    });
});

// To Add New dogs
dogsRoute.route('/adddogs').post(function (req, res) {
    let dogs = new dogsModel(req.body);
    dogs.save()
    .then(game => {
    res.status(200).json({ 'dogs': 'dogs Added Successfully' });
    })
    .catch(err => {
    res.status(400).send("Something Went Wrong");
    });
});

// To Get dogs details By dogs ID
dogsRoute.route('/editdogs/:id').get(function (req, res) {
    let id = req.params.id;
    dogsModel.findById(id, function (err, dogs) {
    res.json(dogs);
    });
});

// To Update The dogs details
dogsRoute.route('/updatedogs/:id').put(function (req, res) {
    dogsModel.findById(req.params.id, function (err, dogs) {
        if (!dogs)
             return next(new Error('Unable To Find dogs With This Id'));
        else {
            var updateRecord =  {
                breed : req.body.breed,
                height_low_inches : req.body.height_low_inches,
                height_high_inches : req.body.height_high_inches,
                weight_low_lbs : req.body.weight_low_lbs,
                weight_high_lbs : req.body.weight_high_lbs
            };

            dogsModel.findByIdAndUpdate(req.params.id,{$set:updateRecord}, (err,docs)=>{
                if(!err)
                    res.send(docs); //res.json('dogs Updated Successfully');
                else
                    console.log('Error while updating all records :'+JSON.stringify(err,undefined,2));
                })
                .catch(err => {
                    res.status(400).send("Unable To Update dogs");
                });
        }
    });
});

// To Delete The dogs
dogsRoute.route('/deletedogs/:id').delete(function (req, res) {
    dogsModel.findByIdAndRemove({ _id: req.params.id }, function (err, dogs) {
         if (err) res.json(err);
         else res.json('dogs Deleted Successfully');
    });
});

module.exports = dogsRoute;