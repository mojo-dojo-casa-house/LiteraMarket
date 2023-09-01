const booksModel = require('../models/Books');
const userModel = require('../models/Users');
const Auth = require('../config/auth')

const create = async (req, res) => {
    try {
        const token = Auth.getToken(req);
		const payload = Auth.decodeJwt(token);
		const user = await userModel.findByPk(payload.sub);
        if(!user)
            return res.status(404).json({message: 'Usuário não encontrado'});
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
    try {
        const token = Auth.getToken(req);
		const payload = Auth.decodeJwt(token);
		const user = await userModel.findByPk(payload.sub);
        if(!user)
            return res.status(404).json({message: 'Usuário não encontrado'});
        const favorites = await user.getUserFavorite();
        return res.status(200).json(favorites);
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