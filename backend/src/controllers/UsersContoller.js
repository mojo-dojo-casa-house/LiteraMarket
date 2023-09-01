const { Op } = require('sequelize');
const Auth = require('../config/auth');
const authModel = require('../models/Auth');
const avaliationModel = require('../models/Avaliation');
const usersModel = require('../models/Users');
const Books = require('../models/Books');

const create = async (req, res) => {
    try {
        const user = await usersModel.create({
            email: req.body.email,
            name: req.body.name
        });
        const { password } = req.body;
        const codedPass = Auth.generatePassword(password);
        await authModel.create({
            hash: codedPass.hash,
            salt: codedPass.salt,
            UserId: user.id,
        })
        return res.status(201).json({
            message: 'Usuário Cadastrado com sucesso',
            user: user
        });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const index = async (req, res) => {
    try {
        const users = await usersModel.findAll();
        return res.status(200).json({ users: users });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const show = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await usersModel.findByPk(id);
        return res.status(200).json({
            message: 'Usuário encontrado',
            user: user
        })
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const update = async (req, res) => {
    const { id } = req.params;
    try {
        const [updated] = await usersModel.update(req.body, { where: { id: id } });
        if (updated) {
            const user = await usersModel.findByPk(id);
            res.status(200).json({
                message: 'Informações atualizadas',
                'user': user
            });
        }
        else throw new Error();
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const destroy = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await usersModel.destroy({ where: { id: id } });
        await authModel.destroy({ where: { UserId: id } });
        if (deleted) {
            return res.status(200).json({ message: 'Usuário deletado com sucesso' })
        } else throw new Error();
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const avaliate = async (req, res) => {
    const { idAvaliator } = req.params;
    try {
        const avaliation = await avaliationModel.create({
            avaliatorId: idAvaliator,
            availedId: req.body.userAvalied,
            score: req.body.score
        });
        return res.status(200).json(avaliation)
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const avaliations = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await usersModel.findByPk(id);
        const avaliations = await user.getAvalied();
        return res.status(200).json(avaliations);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const changePass = async (req, res) => {
    const { id } = req.params;
    try {
        const [updated] = await authModel.update(req.body, { where: { UserId: id } });
        if (updated)
            return res.status(201).json({ message: 'Senha alterada com sucesso' });
        else throw new Error();
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const login = async (req, res) => {
    try {
        const user = usersModel.findOne({
            where: {

                [Op.or]: {
                    user: req.body.user,
                    email: req.body.email,
                }
            }
        })
        if (!user)
            return res.status(404).json({ message: 'Usuário não encontrado' });
        const auth = authModel.findOne({ 
            where: {
                UserId: user.id
            }
        })
        if(Auth.checkPassword(req.body.password, auth.hash, auth.salt)){
            //const token = await Auth.
        }
    } catch (error) {

    }
}

const buy = async (req, res) => {
    const {userId} = req.params;
    try {
        const book = await Books.findByPk(req.body.bookId);
        const user = await usersModel.findByPk(userId);
        const buyed = await user.setBuy(book)
        if (buyed) {
            return res.status(200).json({ message: 'Produto comprado' });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}
module.exports = {
    create,
    index,
    show,
    update,
    destroy,
    avaliate,
    avaliations,
    changePass,
    buy
}