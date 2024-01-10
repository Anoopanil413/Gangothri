import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  phone:{
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'user'
  },
  createdAt: Date
});

UserSchema.index({ role: 1 });

const UserModel = mongoose.model('User', UserSchema);


export default UserModel;