import express from 'express';
import ShoesModel from '../models/shoes.model.js';

const shoesRouter = express.Router();

shoesRouter.post('/create', async (req, res) => {
  try {
    const product = await ShoesModel.create(req.body);

    return res.status(201).json(product);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

shoesRouter.get('/', async (req, res) => {
  try {
    const allShoes = await ShoesModel.find({});

    return res.status(201).json(allShoes);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

export default shoesRouter;
