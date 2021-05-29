const mongoose = require('mongoose');
mongoose.Promise = global.Promise
const Schema = mongoose.Schema;
const emailLengthChecker = (email) => {
    if (!email) {
        return false;
    } else {
        if (email.length < 5 || email.length > 30) {
            return false;
        } else {
            return true;
        }
    }
}

const emailValidators = [
    {
        validator: emailLengthChecker, message: "E-mail must be at least 5 characters but no more 30"
    }
]

const userSchema = new Schema({
    email: {type: String, required: true, unique: true, lowercase: true, validate: emailValidators},
    username: {type: String, required: true, unique: true, lowercase: true},
    password: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema)