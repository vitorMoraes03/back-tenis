import { model, Schema, Types } from "mongoose";


const userSchema = new Schema({
    userName: { type: String, required: true, trim: true },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm,
      },
    password: { type: String, required: true },
    orders: [{ type: Types.ObjectId, ref: "Order"  }],
    gender: { type: String, enum: ["Masculino", "Feminino"]},
    birthday: {type: Date, min: '1950-01-01', max: Date.now(), required: true},
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    adress: {
        streetAndNumber: { type: String, required: true},
        neighborhood: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true }, 
        //ENUM no state?? Tem como fazer o CEP renderizando o endereço automaticamente??
        zipCode: { type: Number, required: true }
    }
    //PASSWORD HASH
});

export const UserModel= model("User", userSchema); 

// exemplo 

// {
// 	"userName": "vitinho123",
// 	"email": "vitinho@gmail.com",
//  "password": "Moraes89!",
// 	"gender": "Masculino",
// 	"birthday": "1989-03-30",
// 	"firstName": "Vitor",
// 	"lastName": "Moraes",
// 	"adress": {
// 		"streetAndNumber": "Rua dois de dezembro, 62",
// 		"neighborhood": "Flamengo",
// 		"city": "Rio de Janeiro",
// 		"state": "RJ",
// 		"zipCode": 22220040
// 	}
// }