import { model, Schema } from 'mongoose';

const shoesSchema = new Schema({
  shoesName: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  gender: { type: String, enum: ['Masculino', 'Feminino'] },
  color: [
    {
      type: String,
      enum: ['white', 'black', 'blue', 'green', 'brown', 'gray', 'orange', 'yellow', 'pink', 'red', 'purple'],
    },
  ],
  category: { type: String, enum: ['Casual', 'Esportivo', 'Sofisticado'] },
  sizeAndStock: {
    32: { type: Number },
    33: { type: Number },
    34: { type: Number },
    35: { type: Number },
    36: { type: Number },
    37: { type: Number },
    38: { type: Number },
    39: { type: Number },
    40: { type: Number },
    41: { type: Number },
    42: { type: Number },
    43: { type: Number },
    44: { type: Number },
  },
  src: { type: String, required: true },
  alt: { type: String, required: true },
});

const ShoesModel = model('Shoes', shoesSchema);
export default ShoesModel;
