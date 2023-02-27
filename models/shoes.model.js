import { model, Schema, Types } from "mongoose";

const shoesSchema = new Schema({
    shoesName: { type: String, required: true, trim: true },
    price: { type: Number, required: true},
    gender:  { type: String, enum: ["Masculino", "Feminino"] },
    color: [ { type: String, enum: 
        ["Branco", "Preto", "Azul", 
        "Verde", "Marrom", "Cinza"] } ],
    //size: { type: Number, required: true },
    //available: { type: Boolean, default: true },
    sizeAndStock: {
        32: {type: Number},
        33: {type: Number},
        34: {type: Number},
        35: {type: Number},
        36: {type: Number},
        37: {type: Number},
        38: {type: Number},
        39: {type: Number},
        40: {type: Number},
        41: {type: Number},
        42: {type: Number},
        43: {type: Number},
        44: {type: Number},
    },
    src: { type: String, required: true },
    alt: { type: String, required: true },
});

export const ShoesModel = model("Shoes", shoesSchema); 