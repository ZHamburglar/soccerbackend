var express = require('express');
var router = express.Router();
var Soccerplayer = require('../models/soccerplayer')
var _ = require('lodash')


router.use(function(req, res, next) {
    req.body = _.pick(req.body, ['name','wsurl','tmurl','imageName','position','age'])
    next()
})

router.get('/', function(req, res) {

    Soccerplayer.find({}, function(err, soccerplayers) {
        if (err) {
            res.status(500).send()
        } else {
            res.json(soccerplayers)
        }
    });
});

module.exports = router;
