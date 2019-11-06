const Mongoose = require('mongoose');
const uri = 'mongodb+srv://Gus:<password>@guscluster-1hajv.mongodb.net/test?retryWrites=true&w=majority'
Mongoose.createConnection(uri).then()