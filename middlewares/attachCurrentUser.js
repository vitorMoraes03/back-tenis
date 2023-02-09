import { UserModel } from "../models/user.model.js";

export default async function attachCurrentUser(req, res, next){
    try {
        const userData = req.auth;

        // req.auth example
        //   _id: '63e3b2c478df3dd479bd2812',
        // email: 'thebunny@gmail.com',
        // iat: 1675866952,
        // exp: 1675953352

        const user = await UserModel.findOne(
            { _id: userData._id } 
        );

        if(!user) {
            return res.status(404).json({ msg: "User not found."});
        }

        req.currentUser = user;
        next();
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}