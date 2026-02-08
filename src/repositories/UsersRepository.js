import GenericRepository from "./GenericRepository.js";

export default class AdoptionRepository extends GenericRepository {
    constructor(dao){
        super(dao);
    }

    getUserByEmail = async (email) => {
        return await this.getBy({ email });
    }

    getUserById = async (id) => {
        return await this.getBy({_id: id});
    }
}