import jwt from "jsonwebtoken";

export function generateToken(user) {
    const { _id, name, email } = user;
  
    const signature = process.env.TOKEN_SIGN_SECRET;
    const expiration = "24h";
  
    return jwt.sign({ _id, name, email }, signature, {
      expiresIn: expiration,
    });
  }