import { model, Schema, Types } from "mongoose";

const shoesSchema = new Schema({
    shoesName: { type: String, required: true, trim: true },
    price: { type: Number, required: true},
    gender: [ { type: String, enum: ["Masculino", "Feminino"]} ],
    color: [{ type: String, enum: ["Branco", "Preto", "Azul"]}],
    size: [{ type: Number, enum: [32, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]}],
    orderedAt: [ {type: Types.ObjectId, ref: "Order"} ],
    //img
});

export const ShoesModel = model("Shoes", shoesSchema); 