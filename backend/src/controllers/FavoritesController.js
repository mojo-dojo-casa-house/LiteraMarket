const booksModel = require('../models/Books');
const userModel = require('../models/Users');

const create = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await userModel.findByPk(userId);
        const book = await booksModel.findByPk(req.body.bookId)
        const favorite = user.setUserFavorite(book)
        return res.status(200).json({
            message: 'Livro favoritado',
            favorite: favorite
        });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const index = async (req,res) => {
    const {userId} = req.params;
    try {
        const user = await userModel.findByPk(userId)
        console.log(user)
        const favorites = await user.getUserFavorite();
        return res.status(200).json(favorites);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const destroy = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await userModel.findByPk(userId);
        const book = await booksModel.findByPk(req.body.bookId)
        const deleted = await user.removeUserFavorite(book)
        if (deleted) {
            return res.status(200).json({ message: 'Favorito deletado com sucesso' });
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