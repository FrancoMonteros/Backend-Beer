const mongoose = require("mongoose")

const UserSchema = mongoose.Schema ({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: String,
    role: String
})

module.exports = mongoose.model("Usuarios" , UserSchema)