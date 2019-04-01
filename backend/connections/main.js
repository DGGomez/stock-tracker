var mongoose = require('mongoose');
try{
mongoose.connect(process.env.MONGO_CONFIG||'mongodb://localhost/Archive');
}
catch(err){
    console.log(err);
}
module.exports = exports = mongoose;