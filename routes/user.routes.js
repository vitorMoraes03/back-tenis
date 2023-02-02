import express from "express";
import { UserModel } from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../config/jwt.config.js";

const SALT_ROUNDS = 10;
const userRouter = express.Router();

userRouter.post(
    "/signup",
    async (req, res) => {
    try {
        const { password } = req.body;

        if (
            !password ||
            !password.match(
              /^(?=.*\d).{4,10}$/gm
            )
          ) {
            return res.status(400).json({
              msg: "Senha invalida, deve conter no minímo 4 caracteres e no máximo 10.",
            });

          }

        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        const passwordHashed = await bcrypt.hash(password, salt);

        const createdUser = await UserModel.create({
            ...req.body,
            password: passwordHashed,
        });

        delete createdUser._doc.password; //deleção do password quando retorna p o front

        return res.status(201).json(createdUser);
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
});

userRouter.post(
    "/login", 
    async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email: email});

        if(!user) {
            console.log('oi');
            return res.status(404).json({ msg: "Email ou senha inválidos"});
        }

        if(await bcrypt.compare(password, user.password)){
            const token = generateToken(user);

            return res.status(200).json({
                user: {
                    userName: user.userName,
                    email: user.email,
                    _id: user._id,
                    orders: user.orders,
                    gender: user.gender,
                    birthday: user.birthday,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    adress: user.adress
                },
                token: token,
            });
        } else {
            console.log('aqui');
            return res.status(401).json({ msg: "Email ou senha invalidos." });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

export { userRouter };