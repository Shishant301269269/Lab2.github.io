const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://shishantneupane:Z1iJWGt2uLUMohto@cluster0.gp6mwvt.mongodb.net/Marketplace?retryWrites=true&w=majority&appName=AtlasApp`,
  { useNewUrlParser: true }
);

const connection = mongoose.connection;

module.exports = connection;