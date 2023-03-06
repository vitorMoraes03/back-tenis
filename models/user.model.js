import { model, Schema, Types } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm,
      },
    password: { type: String, required: true },
    orders: [{ type: Types.ObjectId, ref: "Order"  }],
    birthday: {
      type: Date, 
      min: '1950-01-01', 
      max: Date.now(), 
      required: true,
      // set: function (date) {
      //   const year = date.getFullYear();
      //   const month = date.getMonth() + 1;
      //   const day = date.getDate();
        
      //   return new Date(`${year}-${month}-${day}`)}
      },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    adress: [{ type: Types.ObjectId, ref: "Adress" }]
});

export const UserModel= model("User", userSchema); 

