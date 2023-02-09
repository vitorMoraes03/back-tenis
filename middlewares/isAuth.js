import { expressjwt } from "express-jwt";
import * as dotenv from "dotenv";

// This module provides Express middleware for validating JWTs
// Ou seja, aqui será validado o Token.
// Na nossa req, temos que passar o Token no front, ou pelo token bearer no Insomnia.

// Se vc prestar atenção, esse module faz muita coisa por debaixo dos panos.
// Quando colocado no nosso verbo http, ele age como um middleware, checando a autenticação,
// e dando sequência ou não a nossa requisição.

dotenv.config();

export default expressjwt({
    secret: process.env.TOKEN_SIGN_SECRET,
    algorithms: ["HS256"],
  });
  