const { Op } = require('sequelize');
const commentModel = require('../models/Comments');

const create = async (req, res) => {
    const { userId } = req.params;
    try {
        const comment = await commentModel.create(
            {
                avaliation: req.body.avaliation,
                comment: req.body.comment,
                BookId: req.body.bookId,
                UserId: userId
            });
        if (comment)
            return res.status(200).json({
                message: 'Avaliação adicionado com sucesso',
                comment: comment
            });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const index = async (req, res) => {
    const {bookId}=req.params;
    try {
        const comments = await commentModel.findAll({
            where: {
                BookId: bookId
            }
        })
        return res.status(200).json(comments)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const update = async (req, res) => {
    const { userId } = req.params;
    try {
        const [updated] = await commentModel.update(req.body, {
            where: {
                UserId: userId,
                BookId: req.body.bookId,
            }
        });
        if (updated) {
            return res.status(200).json({
                message: 'Avaliação editada com sucesso',
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
                BookId: req.body.bookId,
            }
        })
        if (deleted) {
            return res.status(200).json({ message: 'Avaliação deletada com sucesso' });
        }
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

module.exports = {
    create,
    update,
    destroy,
    index
}