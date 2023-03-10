import { model, Schema, Types } from 'mongoose';

const orderSchema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User' },
  priceTotal: { type: Number, required: true },
  shoes: [
    {
      id: { type: Types.ObjectId, ref: 'Shoes' },
      size: { type: Number, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now() },
});

const OrderModel = model('Order', orderSchema);
export default OrderModel;
