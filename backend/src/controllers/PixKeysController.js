const pixModel = require('../models/PixKeys');
const userModel = require('../models/Users');
const Auth = require ('../config/auth')

const pixValidation = (type, pix) => {
    const cpf = /\d{3}.\d{3}.\d{3}-\d{2}/;
    const cnpj = /\d{2}.\d{3}.\d{3}\/[0]{3}[1-2]-\d{2}/
    const email = /\S+@\S+(\.[a-z]+)+$/
    const fone = /^[0-9]+$/

    switch (type) {
        case 'cpf':
            return cpf.test(pix)
            break;

        case 'cnpj':
            return cnpj.test(pix)
            break;
        case 'email':
            return email.test(pix)
            break;
        case 'fone':
            return fone.test(pix)
            break;

        case 'random':
            return true;
            break;
    }
    return false;
}

const create = async (req, res) => {
    if (pixValidation(req.body.type, req.body.key)) {
        try {
            const pix = await pixModel.create(req.body);
            const token = Auth.getToken(req);
            const payload = Auth.decodeJwt(token);
            const user = await userModel.findByPk(payload.sub);

            if (!user)
                return res.status(404).json({ message: "Usuario não encontrado." });
            await pix.setUser(user);
            return res.status(200).json({
                message: 'Endereço adicionado com sucesso',
                pix: pix
            });
        } catch (err) {
            return res.status(500).json({ error: err });
        }
    }
    else return res.status(400).json({ message: 'Chave pix mal formatada para o tipo informado.' });
}

const index = async (req, res) => {
    try {
        const token = Auth.getToken(req);
		const payload = Auth.decodeJwt(token);
		const user = await userModel.findByPk(payload.sub);

		if(!user)
			return res.status(404).json({message: "Usuario não encontrado."});
        const pixs = await pixModel.findAll({
            where: {
                UserId: user.id
            }
        });
        return res.status(200).json(pixs);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const destroy = async (req, res) => {
    try {
        const token = Auth.getToken(req);
		const payload = Auth.decodeJwt(token);
		const user = await userModel.findByPk(payload.sub);

		if(!user)
			return res.status(404).json({message: "Usuario não encontrado."});
        const deleted = await pixModel.destroy({
            where: {
                UserId: user.id,
                id: req.body.id
            }
        })
        if (deleted) {
            return res.status(200).json({ message: 'Chave PIX deletada com sucesso' });
        }
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

module.exports = {
    create,
    index,
    destroy
}