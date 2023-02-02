import express from "express";
import * as dotenv from "dotenv";
import { connectToDB } from "./config/db.config.js";
import cors from "cors"; 
import { shoesRouter } from "./routes/shoes.routes.js";
import { userRouter } from "./routes/user.routes.js";
import { orderRouter } from "./routes/order.routes.js";

dotenv.config(); 
const app = express();
connectToDB();

app.use(express.json());
app.use(cors());  

app.use("/shoes", shoesRouter);
app.use("/user", userRouter);
app.use("/order", orderRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server rodando na porta ${process.env.PORT}`);
});