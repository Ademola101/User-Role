const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minLength: [3, 'username must be atleast 3 character long'],
  },
  name: String,
  passwordHash: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ['user', 'staff', 'manager', 'admin'],
    default: 'user',
  },
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash;
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
