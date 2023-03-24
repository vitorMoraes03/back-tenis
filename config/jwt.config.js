import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

// O JSON Web Token é um padrão da Internet para a criação de dados
// com assinatura opcional e/ou criptografia cujo payload contém o JSON
// que afirma algum número de declarações. Os tokens são assinados usando
// um segredo privado ou uma chave pública/privada.

// Ou seja, aqui irá ser gerado o Token.

dotenv.config();

function generateToken(user) {
  const { _id, name, email } = user;

  const signature = process.env.TOKEN_SIGN_SECRET;
  const expiration = '24h';

  return jwt.sign({ _id, name, email }, signature, {
    expiresIn: expiration,
  });
}

export default generateToken;
