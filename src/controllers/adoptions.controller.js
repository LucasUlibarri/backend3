import { adoptionService, petsService, usersService } from "../services/index.js";

const getAllAdoptions = async (req, res) => {
    const result = await adoptionService.getAll();
    res.send({status: "success", payload: result})
};

const getAdoption = async (req, res) => {
    const adoptionId = req.params.aid;
    const adoption = await adoptionService.getBy({_id: adoptionId});
    if(!adoption) return res.status(404).send({status: "error", message: "Adopción no encontrada"});
    res.send({status: "success", payload: adoption})
}

const createAdoption = async (req, res) => {
    const { uid, pid } = req.params;
    const user = await usersService.getUserById(uid);
    if(!user) return res.status(404).send({status: "error", message: "Usuario no encontrado"});

    const pet = await petsService.getBy({_id:pid});
    if(!pet) return res.status(404).send({status: "error", message: "Mascota no encontrada"});

    if(pet.adopted) return res.status(400).send({status: "error", message: "Mascota ya adoptada"});

    user.pets.push(pet._id);
    await usersService.update(user._id, {pets: user.pets});
    await petsService.update(pet._id, {adopted: true, user: user._id});
    await adoptionService.create({user: user._id, pet: pet._id});

    res.status(201).send({status: "success", message: "Mascota adoptada!"})
}

export default {
    getAllAdoptions,
    getAdoption,
    createAdoption
};