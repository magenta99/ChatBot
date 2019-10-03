const mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    image :{
        type: String
    }
})

mongoose.model("Image",imageSchema)