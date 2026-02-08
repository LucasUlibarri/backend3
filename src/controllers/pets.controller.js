import PetDTO from "../dto/Pet.dto.js";
import { petsService } from "../services/index.js";
import __dirname from "../utils/index.js";

const getAllPets = async (req, res) => {
    const pets = await petsService.getAll();
    res.send({status: "success", payload: pets})
}

const getPetById = async (req, res) => {
    const petId = req.params.pid;
    const pet = await petsService.getBy({_id: petId});
    if(!pet) return res.status(404).send({status: "error", message: "Mascota no encontrada"});
    res.send({status: "success", payload: pet})
}

const createPet = async (req, res) => {
    const { name, species, age } = req.body;
    if(!name || !species) return res.status(400).send({status: "error", message: "Faltan datos obligatorios"});

    const pet = PetDTO.getPetInputFrom({name, species, age});
    const result = await petsService.create(pet);
    res.send({status: "success", payload: result})
}

const updatePet = async (req, res) => {
    const petUpdatedBody = req.body;
    const petId = req.params.pid;
    const result = await petsService.update(petId, petUpdatedBody);
    res.send({status: "success", payload: result})
}

const deletePet = async (req, res) => {
    const petId = req.params.pid;
    const result = await petsService.delete(petId);
    res.send({status: "success", message: "Mascota eliminada", payload: result});
}

export default {
    getAllPets,
    getPetById,
    createPet,
    updatePet,
    deletePet,
};