const userModel = require('../models/Users');
const contactModel = require('../models/Contact');

const create = async (req,res) => {
    const { id } = req.params
    try {
        const contact = await contactModel.create(req.body);
        const user = await userModel.findByPk(id);
        await contact.setUser(user);
        return res.status(200).json({
            message: 'Contato criado com sucesso',
            contato:contact
        });
    } catch (err) {
        return res.status(500).json({error:err});
    }
}

const index = async (req,res) => {
    const { id } = req.params;
    try {
        const contact = await contactModel.findAll({
            where: {
                UserId: id
            }
        })
        return res.status(200).json(contact);
    } catch (err) {
        return res.status(500).json({error:err});
    }
}

module.exports = {
    create,
    index,
}