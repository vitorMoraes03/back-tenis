import express from "express";
import { OrderModel } from "../models/order.model.js";

const orderRouter = express.Router();

orderRouter.post(
    "/create",
    async (req, res) => {
        try {
            const order = await OrderModel.create(
                req.body
            );

            return res.status(201).json(order);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    }
);

export { orderRouter };