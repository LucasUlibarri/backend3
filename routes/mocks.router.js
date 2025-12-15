import { Router } from "express";
import { generatePet } from "../mocks/pets.mock.js";
import { generateUser } from "../mocks/user.mock.js";
import { UserModel } from "../models/user.model.js";
import { PetModel } from "../models/pet.model.js";

const router = Router();

router.post('/generateData', async (req, res) => {
    try{
        const { users, pets } = req.body;

        const usersArray = [];
        const petsArray = [];

        for (let i = 0; i < users; i++) {
            usersArray.push(generateUser());
        }

        for (let i = 0; i < pets; i++) {
            petsArray.push(generatePet());
        }

        await UserModel.insertMany(usersArray);
        await PetModel.insertMany(petsArray);

        res.json({ 
            status: 'Success', 
            usersGenerated: users, 
            petsGenerated: pets 
        });
    }catch(error){
        res.status(500).json({ status: 'Error', message: error.message });
    }
})

router.get('/test', (req, res) => {
  res.json({ status: 'mocks router OK' });
});

router.get('/mockingpets', (req, res) => {
    const pets = [];

    for (let i = 0; i < 100; i++) {
        pets.push(generatePet());
    }

    res.json(pets);
})

router.get('/mockingusers', (req, res) => {
    const users = [];
    
    for (let i = 0; i < 50; i++) {
        users.push(generateUser());
    }

    res.json(users);
})

export default router;