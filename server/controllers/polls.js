var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

module.exports = {
    getAll: function(req, res){
        Poll.find({})
        .then(poll => {
            res.json(poll);
        })
        .catch(errors => {
            res.status(500).json(errors)
        })
    },
    getOne: function(req, res){
        Poll.findOne({_id: req.params.id})
        .then(poll => {
            res.json(poll);
        })
        .catch(errors => {
            res.status(500).json(errors);
        })
    },
    create: function(req, res){
        var poll = new Poll(req.body);
        poll.save()
        .then( () => {
            res.json(true);
        })
        .catch(errors => {
            res.status(500).json(errors);
        })
    },
    updateOption1: function(req, res){
        Poll.findOneAndUpdate({_id: req.params.id}, {$inc: {'option1.vote': 1}},
        function(errors, results){
            if(errors){
                console.log(errors)
            } else {
                res.json(true);
            }
        })
    },
    updateOption2: function(req, res){
        Poll.findOneAndUpdate({_id: req.params.id}, {$inc: {'option2.vote': 1}},
        function(errors, results){
            if(errors){
                console.log(errors)
            } else {
                res.json(true);
            }
        })
    },
    updateOption3: function(req, res){
        Poll.findOneAndUpdate({_id: req.params.id}, {$inc: {'option3.vote': 1}},
        function(errors, results){
            if(errors){
                console.log(errors)
            } else {
                res.json(true);
            }
        })
    },
    updateOption4: function(req, res){
        Poll.findOneAndUpdate({_id: req.params.id}, {$inc: {'option4.vote': 1}},
        function(errors, results){
            if(errors){
                console.log(errors)
            } else {
                res.json(true);
            }
        })
    },
    deletePoll: function(req, res){
        Poll.remove({_id: req.params.id}, function(errors, results){
            if(errors){
                console.log(errors)
            } else {
                res.json(true);
            }
        })
    }
}