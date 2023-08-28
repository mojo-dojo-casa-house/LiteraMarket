const addressModel = require('../models/Address');
const userModel = require('../models/Users');

const create = async (req, res) => {
    const { userId } = req.params;
    try {
        const address = await addressModel.create(req.body);
        const user = await userModel.findByPk(userId);
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
    const { userId } = req.params;
    try {
        const address = await addressModel.findAll({
            where: {
                UserId: userId
            }
        });
        return res.status(200).json(address);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const update = async (req, res) => {
    const { userId } = req.params;
    try {
        const [updated] = await addressModel.update(req.body, {
            where: {
                UserId: userId,
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
    const { userId } = req.params;
    try {
        const deleted = await addressModel.destroy({
            where: {
                    UserId: userId,
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