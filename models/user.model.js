import { model, Schema, Types } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm,
  },
  password: { type: String, required: true },
  orders: [{ type: Types.ObjectId, ref: 'Order' }],
  birthday: {
    type: Date,
    min: '1950-01-01',
    max: Date.now(),
  },
  firstName: { type: String, required: true },
});

const UserModel = model('User', userSchema);
export default UserModel;
