const userModel = require('../models/Users');
const contactModel = require('../models/Contact');
const Auth = require('../config/auth')
const { Op } = require('sequelize');

const create = async (req, res) => {
    try {
        const contact = await contactModel.create(req.body);
        const token = Auth.getToken(req);
		const payload = Auth.decodeJwt(token);
		const user = await userModel.findByPk(payload.sub);
        if(!user)
            return res.status(404).json({message: 'Usuário não encontrado'});
        await contact.setUser(user);
        return res.status(200).json({
            message: 'Contato criado com sucesso',
            contato: contact
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
        const contact = await contactModel.findAll({
            where: {
                UserId: user.id
            }
        })
        return res.status(200).json(contact);
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
        const [updated] = await contactModel.update(req.body, { 
            where: { 
                UserId: user.id, 
                id: req.body.id 
            } 
        })
        if (updated) {
            const contact = await contactModel.findByPk(req.body.id)
            return res.status(200).json(contact);
        }
        else throw new Error();
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
        const deleted = await contactModel.destroy({
            where: {
                [Op.and]: {
                    UserId: user.id,
                    id: req.body.id
                }
            }
        })
        if(deleted) 
            return res.status(200).json({message: 'Contato deletado com sucesso'})
        else throw new Error();
    } catch (err) {
        return res.status(500).json({ error: err });

    }
}
module.exports = {
    create,
    index,
    update,
    destroy,
}