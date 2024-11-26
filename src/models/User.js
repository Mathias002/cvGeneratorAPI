const mongoose = require("mongoose");
const Role = require("../enum/RolesEnum");

const UserSchema = new mongoose.Schema({
    prenom: {
        type: String,
        required: true,
    },
    nom: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: [Role.ADMIN, Role.USER],
        required: false,
        default: Role.USER,
    },

    cv: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cv",
        default: null,
    },
});
    
module.exports = mongoose.model("User", UserSchema);
