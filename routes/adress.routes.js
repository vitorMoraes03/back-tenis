import express from "express";
import { AdressModel } from "../models/adress.model.js";
import isAuth from "../middlewares/isAuth.js";
import attachCurrentUser from "../middlewares/attachCurrentUser.js";
import { UserModel } from "../models/user.model.js";

const adressRouter = express.Router();

// Adicionar rota get e edit?
// Ou deixar tudo pelo user?

adressRouter.post(
    "/create",
    isAuth,
    attachCurrentUser,
    async (req, res) => {
        try {
            const loggedInUser = req.currentUser;

            const adress = await AdressModel.create({
                ...req.body,
                userId: loggedInUser._id
        });

            await UserModel.findOneAndUpdate(
                { _id: loggedInUser._id },
                { $push: { adress: adress._doc._id} },
                { runValidators : true }
            )

            return res.status(201).json(adress);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    }
);

export { adressRouter };