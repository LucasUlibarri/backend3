import Users from "../dao/Users.dao.js"
import Pets from "../dao/Pets.dao.js";
import Adoption from "../dao/Adoption.js";

import UserRepository from "../repositories/UsersRepository.js";
import PetRepository from "../repositories/PetRepository.js";
import AdoptionRepository from "../repositories/AdoptionRepository.js";

export const usersService = new UserRepository(new Users());
export const petsService = new PetRepository(new Pets());
export const adoptionService = new AdoptionRepository(new Adoption());