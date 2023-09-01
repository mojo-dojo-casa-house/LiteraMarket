const booksModel = require('../models/Books');
const userModel = require('../models/Users');

const create = async (req, res) => {
    try {
        const token = Auth.getToken(req);
        const payload = Auth.decodeJwt(token);
        const user = await userModel.findByPk(payload.sub);

        if (!user)
            return res.status(404).json({ message: "Usuario não encontrado." });
        const book = await booksModel.findByPk(req.body.bookId)
        const cart = user.setUserCart(book)
        return res.status(200).json({
            message: 'Livro favoritado',
            cart: cart
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

        if (!user)
            return res.status(404).json({ message: "Usuario não encontrado." });
        const carts = await user.getUserCart();
        return res.status(200).json(carts);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const destroy = async (req, res) => {
    const { userId } = req.params;
    try {
        const token = Auth.getToken(req);
        const payload = Auth.decodeJwt(token);
        const user = await userModel.findByPk(payload.sub);

        if (!user)
            return res.status(404).json({ message: "Usuario não encontrado." });
        const book = await booksModel.findByPk(req.body.bookId)
        const deleted = await user.removeUserCart(book)
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