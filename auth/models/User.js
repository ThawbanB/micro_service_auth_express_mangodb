const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

userSchema.plugin(uniqueValidator, { message: '{PATH} est déjà utilisé.' });

module.exports = mongoose.model('User', userSchema);
