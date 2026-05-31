const mongoose = require('mongoose');

const snippetSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  roast: String,
  slug: {
    type: String,
    unique: true,
  },
  isPublic: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Snippet', snippetSchema);
