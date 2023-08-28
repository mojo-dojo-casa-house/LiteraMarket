const userModel = require('../models/Users');
const contactModel = require('../models/Contact');
const { Op } = require('sequelize');

const create = async (req, res) => {
    const { userId } = req.params
    try {
        const contact = await contactModel.create(req.body);
        const user = await userModel.findByPk(userId);
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
    const { userId } = req.params;
    try {
        const contact = await contactModel.findAll({
            where: {
                UserId: userId
            }
        })
        return res.status(200).json(contact);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const update = async (req, res) => {
    const { userId } = req.params;
    try {
        const [updated] = await contactModel.update(req.body, { 
            where: { 
                UserId: userId, 
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
    const { userId } = req.params;
    try {
        const deleted = await contactModel.destroy({
            where: {
                [Op.and]: {
                    UserId: userId,
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