const cardsModel = require('../models/PaymentCards');
const userModel = require('../models/Users');
const Auth = require('../config/auth');

const create = async (req, res) => {
    try {
        const card = await cardsModel.create(req.body);
        const token = Auth.getToken(req);
		const payload = Auth.decodeJwt(token);
		const user = await userModel.findByPk(payload.sub);

		if(!user)
			return res.status(404).json({message: "Usuario não encontrado."});
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
    try {
        const token = Auth.getToken(req);
		const payload = Auth.decodeJwt(token);
		const user = await userModel.findByPk(payload.sub);

		if(!user)
			return res.status(404).json({message: "Usuario não encontrado."});
        const cards = await cardsModel.findAll({
            where: {
                UserId: user.id
            }
        });
        return res.status(200).json(cards);
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
			return res.status(404).json({message: "Usuario não encontrado."});
        const [updated] = await cardsModel.update(req.body, {
            where: {
                UserId: user.id,
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
    try {
        const token = Auth.getToken(req);
		const payload = Auth.decodeJwt(token);
		const user = await userModel.findByPk(payload.sub);

		if(!user)
			return res.status(404).json({message: "Usuario não encontrado."});
        const deleted = await cardsModel.destroy({
            where: {
                    UserId: user.id,
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