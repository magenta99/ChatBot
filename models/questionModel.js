const mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
    question : {
        type : String
    },
    key :{
        type : String
    },
    explain : {
        type : String
    }
});

mongoose.model("Question",questionSchema);