const mongoose = require("mongoose")

const User = mongoose.Schema({
    Nom : {
        type : String,
        required : true
    },

    Prenom : {
        type : String,
        required : true
    },

    Email : {
        type : String,
        required : true,
        Unique : true
    },

    Password : {
        type : String,
        required : true
    }


})

const UserModel = mongoose.model("users", User)

module.exports = UserModel