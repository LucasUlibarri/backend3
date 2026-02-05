import { Router } from "express";
import { AdoptionModel } from "../dao/models/adoption.model.js";

const router = Router();

router.get('/', async (req, res) => {
    const adoptions = await AdoptionModel.find();
    res.json(adoptions);
});

router.post('/', async (req, res) => {
    const adoption = await AdoptionModel.create(req.body);
    res.status(201).json(adoption);
});

export default router;