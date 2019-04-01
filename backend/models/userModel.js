const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String },
    name: { type: String },
});

const User = mongoose.model('User', UserSchema);

User.createUser = (userData) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log('newUser: ', userData);
            const user = new User(userData);
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(user.password, salt, async (err, hash) => {
                    user.password = hash;
                    await user.save();
                    resolve(user);
                });
            });
        } catch (error) {
            console.log('createUser error: ', error);
            reject(error);
        }
    });
};

User.comparePassword = (candidatePassword, hash) => {
    return new Promise(async (resolve, reject) => {
        try {
            bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
                if(err) throw err;
                resolve(isMatch);
            });
        } catch (error) {
            console.log('comparePassword error: ', error);
            reject(error);
        }
    });
};
module.exports = User;