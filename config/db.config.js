import mongoose from "mongoose";

export async function connectToDB(){
    try {
        const dbConnect = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Conectado ao db: ${dbConnect.connection.name}`);
    } catch (err) {
        console.log(err);
    }
}

