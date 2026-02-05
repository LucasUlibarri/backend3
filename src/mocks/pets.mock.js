import { fa, faker } from '@faker-js/faker';

export function generatePet(){
    const pet = {
        _id: faker.database.mongodbObjectId(),
        name: faker.animal.petName(),
        specie: faker.animal.type(),
        age: faker.number.int({ min: 1, max: 15 }),

    }

    return pet;
}