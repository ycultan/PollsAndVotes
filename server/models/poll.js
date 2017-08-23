var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PollSchema = new mongoose.Schema({
    user: String,
    question: String,
    option1: {text: String, vote: Number},
    option2: {text: String, vote: Number},
    option3: {text: String, vote: Number},
    option4: {text: String, vote: Number}
},
{timestamps: true})
mongoose.model('Poll', PollSchema);