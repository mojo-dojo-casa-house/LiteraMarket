const usersModel = require('../models/Users');

const create = async (req, res) => {
    try {
        const user = await usersModel.create(req.body);
        return res.status(201).json({
            message: 'Usuário Cadastrado com sucesso', 
            user: user
        });
    } catch (err) {
        return res.status(500).json({error:err});
    }
}

const index = async (req, res) => {
    try {
        const users = await usersModel.findAll();
        return res.status(200).json({users:users});
    } catch (err) {
        return res.status(500).json({error:err});
    }
}

const show = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await usersModel.findByPk(id);
        return res.status(200).json({
            message: 'Usuário encontrado',
            user:user
        })
    } catch (err) {
        return res.status(500).json({error:err});
    }
}

const update = async (req, res) => {
    const { id } = req.params;
    try {
        const [updated] = await usersModel.update(req.body, {where: {id:id}});
        if (updated) {
            const user = await usersModel.findByPk(id);
            res.status(200).json({
                message: 'Informações atualizadas',
                'user': user
            });
        }
        else throw new Error();
    } catch (err) {
        return res.status(500).json({error:err});
    }
}

const destroy = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await usersModel.destroy({where:{id:id}});
        if (deleted){
            return res.staus(200).json({message: 'Usuário deletado com sucesso'})
        }
    } catch (err) {
        return res.status(500).json({error:err});
    }
}

module.exports = {
    create,
    index,
    show,
    update,
    destroy
}