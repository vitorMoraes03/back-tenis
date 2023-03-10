/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import UserModel from '../models/user.model.js';

async function attachCurrentUser(req, res, next) {
  try {
    const userData = req.auth;

    const user = await UserModel.findOne(
      { _id: userData._id },
      { password: 0 } // remoção password por segurança
    );

    if (!user) {
      return res.status(404).json({ msg: 'User not found.' });
    }

    req.currentUser = user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

export default attachCurrentUser;
