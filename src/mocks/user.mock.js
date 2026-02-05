import { fa, faker } from "@faker-js/faker";
import bcrypt from "bcrypt";
import { environment } from "../config/config.js";

const hashedPassword = bcrypt.hashSync(environment.MOCK_PASSWORD, 10);

export function generateUser(){

    const firstName =  faker.person.firstName();
    const lastName = faker.person.lastName();
    
    const pets = [];

    const roles = {
        user: 'user',
        admin: 'admin'
    }

    const user = {
        _id: faker.database.mongodbObjectId(),
        first_name: firstName,
        last_name: lastName,
        email: faker.internet.email({ firstName, lastName }),
        password: hashedPassword,
        role: faker.helpers.enumValue(roles),
        pets
    }

    return user;
}