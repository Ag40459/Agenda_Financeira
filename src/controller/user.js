const knex = require('../connections/connection');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    const { name, email, cpf, phone, password, birthdate, adress, status } = req.body;

    try {
        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = await knex('users');

        const newUser = {
            name,
            email,
            cpf,
            phone,
            password,
            birthdate,
            adress,
            status
        }
        user.push(newUser);
        return res.status(200).json(user)

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: `Erro ${error.message}` })
    }


}

module.exports = {
    registerUser,

}