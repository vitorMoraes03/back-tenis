import express from "express";
import { OrderModel } from "../models/order.model.js";
import { ShoesModel } from "../models/shoes.model.js";
import isAuth from "../middlewares/isAuth.js";
import attachCurrentUser from "../middlewares/attachCurrentUser.js";
import { UserModel } from "../models/user.model.js";

const orderRouter = express.Router();

orderRouter.post(
    "/create",
    isAuth,
    attachCurrentUser,
    async (req, res) => {
        try {
            const loggedInUser = req.currentUser;

            const order = await OrderModel.create({  
                ...req.body,
                userId: loggedInUser._id
            });

            req.body.shoes.map(async element => {    
                await ShoesModel.findOneAndUpdate( 
                    { _id: element },
                    { available: false },
                    { runValidators: true } );
             });

            await UserModel.findOneAndUpdate(
                { _id: loggedInUser._id },
                { $push: { orders: order._doc._id} },
                { runValidators: true }
            )

            return res.status(201).json(order);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    }
);

orderRouter.delete(
    "/delete",
    isAuth,
    attachCurrentUser,
    async (req, res) => {
        try {
            const loggedInUser = req.currentUser;
            const orderInfo = await OrderModel.findOne( { userId: loggedInUser._id } );


            orderInfo.shoes.map(async (element) => {
                await ShoesModel.findOneAndUpdate(
                    { _id: element },
                    { available: true },
                    { runValidators: true }
                )
            })

            const deletedOrder = await OrderModel.deleteOne({ _id: orderInfo._id });
            await UserModel.findOneAndUpdate(
                { _id: loggedInUser._id },
                { $pull: { orders: orderInfo._id } },
                { runValidators: true } 
            )

        
            return res.status(201).json(deletedOrder);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    }
);

export { orderRouter };
