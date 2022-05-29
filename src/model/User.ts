import { Document, Schema, model as createModel } from 'mongoose';
import { User } from '../interfaces/UserInterface';
import MongoModel from './MongoModel';

interface UserDocument extends User, Document {}

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password_hash: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
});

export default class UserModel extends MongoModel<UserDocument> {
  constructor(model = createModel('User', userSchema)) {
    super(model);
  }
}
