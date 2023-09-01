const addressModel = require('../models/Address');
const userModel = require('../models/Users');
const Auth = require('../config/auth')

const create = async (req, res) => {
    try {
        const token = Auth.getToken(req);
		const payload = Auth.decodeJwt(token);
		const user = await userModel.findByPk(payload.sub);
        if(!user)
            return res.status(404).json({message: 'Usuário não encontrado'});
        const address = await addressModel.create(req.body);
        await address.setUser(user);
        return res.status(200).json({
            message: 'Endereço adicionado com sucesso',
            address: address
        });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const index = async (req, res) => {
    try {
        const token = Auth.getToken(req);
		const payload = Auth.decodeJwt(token);
		const user = await userModel.findByPk(payload.sub);
        if(!user)
            return res.status(404).json({message: 'Usuário não encontrado'});
        const address = await addressModel.findAll({
            where: {
                UserId: user.id
            }
        });
        return res.status(200).json(address);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const update = async (req, res) => {
    try {
        const token = Auth.getToken(req);
		const payload = Auth.decodeJwt(token);
		const user = await userModel.findByPk(payload.sub);
        if(!user)
            return res.status(404).json({message: 'Usuário não encontrado'});
        const [updated] = await addressModel.update(req.body, {
            where: {
                UserId: user.id,
                id: req.body.id
            }
        })
        if (updated) {
            const address = await addressModel.findByPk(req.body.id);
            return res.status(200).json({
                message: 'Endereço alterado com sucesso',
                address
            })
        } else throw new Error();
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
            return res.status(404).json({message: 'Usuário não encontrado'});
        const deleted = await addressModel.destroy({
            where: {
                    UserId: user.id,
                    id: req.body.id
            }
        })
        if (deleted) {
            return res.status(200).json({ message: 'Endereço deletado com sucesso' });
        }
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

module.exports = {
    create,
    index,
    update,
    destroy
}