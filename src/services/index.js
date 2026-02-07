import Users from "../dao/Users.dao.js"
import Pets from "../dao/Pets.dao.js";
import Adoption from "../dao/Adoptions.dao.js";

import UserRepository from "../repositories/User.repository.js";
import PetRepository from "../repositories/Pet.repository.js";
import AdoptionRepository from "../repositories/Adoption.repository.js";

export const usersService = new UserRepository(new Users());
export const petsService = new PetRepository(new Pets());
export const adoptionService = new AdoptionRepository(new Adoption());