const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  name: String,
  description: String,
  // Add more fields as needed
});

module.exports = mongoose.model('Resource', resourceSchema);
