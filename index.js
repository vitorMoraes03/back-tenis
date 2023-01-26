// Esse código esta comentado para fins pessoais de estudo.

import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config(); //Permite config arquivos .env
const app = express();

app.use(express.json()); //Middleware do próprio express, para parsear requisições em Json.
app.use(cors());  //Middleware para cors.

app.listen(4000, () => {
  console.log("Server rodando teste vitor");
});