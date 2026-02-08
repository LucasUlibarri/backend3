import { usersService } from "../services/index.js";
import { createHash, passwordValidation } from "../utils/index.js";
import jwt from "jsonwebtoken";
import UserDTO from "../dtos/User.dto.js";

const register = async (req, res) => {
    try{
        const { first_name, last_name, email, password } = req.body;
        if(!first_name || !last_name || !email || !password) return res.status(400).send({status: "error", message: "Faltan datos obligatorios"});

        const exists = await usersService.getUserBy({email});
        if(exists) return res.status(400).send({status: "error", message: "El usuario ya existe"});

        const hasedPassword = await createHash(password);
        const user = {
            first_name,
            last_name,
            email,
            password: hasedPassword
        }

        let result = await usersService.create(user);
        constole.log(result);
        res.send({status: "success", payload: result})
    }catch(error){
        res.status(500).send({status: "error", message: error.message})
    }
}

const login = async (req, res) => {
    const cookie = req.cookies["coderCookieToken"];
    const user = jwt.verify(cookie, "coderSecretKey");
    if(user)
        return res.send({status: "success", payload: user})
}

const current = async (req, res) => {
    const cookie = req.cookies["coderCookieToken"];
    const user = jwt.verify(cookie, "coderSecretKey");
    if(user)
        return res.send({status: "success", payload: user}) 
}

const unprotectedLogin = async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) return res.status(400).send({status: "error", message: "Faltan datos obligatorios"});

    const user = await usersService.getUserBy({email});
    if(!user) return res.status(404).send({status: "error", message: "Usuario no encontrado"});

    const inValidPassword = await passwordValidation(password, user.password);
    if(!inValidPassword) return res.status(400).send({status: "error", message: "Contraseña incorrecta"});

    const token = jwt.sign(user, 'coderSecretKey', {expiresIn: '1h'});
    res.cookie("coderCookieToken", token, {maxAge: 3600000}).send({status: "success", message: "Usuario logueado"})
}

const unprotectedCurrent = async (req, res) => {
    const cookie = req.cookies["coderCookieToken"];
    const user = jwt.verify(cookie, "coderSecretKey");
    if(user)
        return res.send({status: "success", payload: user})
}

export default {
    register,
    login,
    register,
    current,
    unprotectedLogin,
    unprotectedCurrent
};