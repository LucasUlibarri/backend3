import { usersService } from "../services/index.js";

const getAllUsers = async (req, res) => {
    const users = await usersService.getAll();
    res.send({status: "success", payload: users})
}

const getUser = async (req, res) => {
    const userId = req.params.uid;
    const user = await usersService.getById(userId);
    if(!user) return res.status(404).send({status: "error", message: "Usuario no encontrado"});
    res.send({status: "success", payload: user})
}

const updateUser = async (req, res) => {
    const updateBody = req.body;
    const userId = req.params.uid;
    const user = await usersService.getById(userId);
    if(!user) return res.status(404).send({status: "error", message: "Usuario no encontrado"});

    const result = await usersService.update(userId, updateBody);
    res.send({status: "success", payload: result, message: "Usuario actualizado"})
}

const deleteUser = async (req, res) => {
    const userId = req.params.uid;
    const result = await usersService.delete(userId);
    res.send({status: "success", payload: result, message: "Usuario eliminado"})
}

export default {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
};