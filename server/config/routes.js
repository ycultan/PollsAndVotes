var path = require('path');
var polls = require('./../controllers/polls.js');

module.exports = function(app) {
    app.get('/polls', polls.getAll);
    app.post('/polls', polls.create);
    app.get('/polls/:id', polls.getOne);
    app.get('/pollsOption1/:id', polls.updateOption1);
    app.get('/pollsOption2/:id', polls.updateOption2);
    app.get('/pollsOption3/:id', polls.updateOption3);
    app.get('/pollsOption4/:id', polls.updateOption4);
    app.get('/polls/delete/:id', polls.deletePoll)
    app.all('*', (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
}