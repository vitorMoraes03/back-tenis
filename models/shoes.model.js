import { model, Schema, Types } from "mongoose";

const shoesSchema = new Schema({
    shoesName: { type: String, required: true, trim: true },
    price: { type: Number, required: true},
    gender:  { type: String, enum: ["Masculino", "Feminino"] },
    color: [ { type: String, enum: ["Branco", "Preto", "Azul", "Verde"] } ],
    size: { type: Number, required: true },
    available: { type: Boolean, default: true }
});

export const ShoesModel = model("Shoes", shoesSchema); 