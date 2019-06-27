const mongoose = require("mongoose");

const NewUser = mongoose.model("NewUsers", {
    name : {
        type : String,
        require : true,
        trim : true
    }, 
    age : {
        type : Number,
        default : 0
    }
})

module.exports = NewUser;