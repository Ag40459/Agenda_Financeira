const authenticationNewUser = joiSchema => async (req, res, next) => {
    console.log('passei na autenticação');
    const { name, email, cpf, phone, password, birthdate, adress, status } = req.body;

    try {
        await joiSchema.validateAsync(req.body);


        if (verifyCpfAccount) {
            return res.status(400).json({ messagem: "Cpf já está cadastrado em outra conta" })
        }

        if (verifyEmailAccount) {
            return res.status(400).json({ messagem: "Email já está cadastrado em outra conta" })
        }
        if (!validateCPF(cpf)) {
            return res.status(400).json({ message: 'O número do Cpf não é válido' })
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: error.message });
    }

}

module.exports = {
    authenticationNewUser
}