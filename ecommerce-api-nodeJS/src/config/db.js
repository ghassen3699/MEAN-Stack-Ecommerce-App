const mongoose = require('mongoose');


const MONGODB_URL = `mongodb+srv://ghassenkhamassi:ghassenTekup@cluster0.olvrldg.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = () => {
    return mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
};

module.exports = { connectDB };

