import { model, Schema, Types } from "mongoose";

const orderSchema = new Schema({
    userId: { type: Types.ObjectId, ref: "User"  },
    priceTotal: { type: Number, required: true},
    shoes: [ { type: Types.ObjectId, ref: "Shoes" }],
    createdAt: { type: Date, default: Date.now() }
});

export const OrderModel = model("Order", orderSchema); 