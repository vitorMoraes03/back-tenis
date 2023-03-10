import { model, Schema, Types } from 'mongoose';

const adressSchema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User' },
  streetAndNumber: { type: String, required: true },
  neighborhood: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  // ENUM no state?? Tem como fazer o CEP renderizando o endereço automaticamente??
  zipCode: { type: Number, required: true },
});

const AdressModel = model('Adress', adressSchema);
export default AdressModel;
