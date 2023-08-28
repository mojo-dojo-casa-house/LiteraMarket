const cardsModel = require('../models/PaymentCards');
const userModel = require('../models/Users');

const create = async (req, res) => {
    const { userId } = req.params;
    try {
        const card = await cardsModel.create(req.body);
        const user = await userModel.findByPk(userId);
        await card.setUser(user);
        return res.status(200).json({
            message: 'Endereço adicionado com sucesso',
            card: card
        });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const index = async (req, res) => {
    const { userId } = req.params;
    try {
        const cards = await cardsModel.findAll({
            where: {
                UserId: userId
            }
        });
        return res.status(200).json(cards);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const update = async (req, res) => {
    const { userId } = req.params;
    try {
        const [updated] = await cardsModel.update(req.body, {
            where: {
                UserId: userId,
                id: req.body.id
            }
        })
        if (updated) {
            const card = await cardsModel.findByPk(req.body.id);
            return res.status(200).json({
                message: 'Endereço alterado com sucesso',
                card
            })
        } else throw new Error();
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const destroy = async (req, res) => {
    const { userId } = req.params;
    try {
        const deleted = await cardsModel.destroy({
            where: {
                    UserId: userId,
                    id: req.body.id
            }
        })
        if (deleted) {
            return res.status(200).json({ message: 'Cartão de pagamento deletado com sucesso' });
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