const commentModel = require('../models/Books');
const userModel = require('../models/Users');

const create = async (req, res) => {
    const { userId, bookId } = req.params;
    try {
        const comment = await commentModel.create({
            BooksId: bookId,
            UsersId: userId,
            avaliation: req.body.avaliation,
            comment: req.body.comment
        });
        const user = await userModel.findByPk(userId);
        await commentModel.setUser(user);
        return res.status(200).json({
            message: 'Avaliação adicionado com sucesso',
            comment: comment
        });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const update = async (req, res) => {
    const { userId } = req.params;
    try {
        const [updated] = await commentModel.update(req.body, {
            where: {
                UserId: userId,
                id: req.body.id
            }
        })
        if (updated) {
            const comment = await commentModel.findByPk(req.body.id);
            return res.status(200).json({
                message: 'Avaliação editado com sucesso',
                comment
            })
        } else throw new Error();
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const destroy = async (req, res) => {
    const { userId } = req.params;
    try {
        const deleted = await commentModel.destroy({
            where: {
                UserId: userId,
                id: req.body.id
            }
        })
        if (deleted) {
            return res.status(200).json({ message: 'Avaliação deletado com sucesso' });
        }
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

module.exports = {
    create,
    update,
    destroy
}