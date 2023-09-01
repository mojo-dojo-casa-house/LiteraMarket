const { Op } = require('sequelize');
const Auth = require('../config/auth');
const authModel = require('../models/Auth');
const avaliationModel = require('../models/Avaliation');
const usersModel = require('../models/Users');
const fsPromise = require('fs').promises;


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

const getDetails = async(req, res) => {
	try {

		const token = Auth.getToken(req);
		const payload = Auth.decodeJwt(token);
		const user = await usersModel.findByPk(payload.sub);

		if(!user)
			return res.status(404).json({message: "Usuario não encontrado."});
		return res.status(200).json({user:user});
		
	} catch (e) {
		return res.status(500).json({err: e})
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
        const user = await authModel.findByPk(id);
        if (Auth.checkPassword(req.body.password, user.auth, user.salt))
            return res.status(401).json({ message: 'Senha Invalida' })
        const codedNewPass = Auth.generatePassword(req.body.newPassword)
        const [updated] = await authModel.update({
            hash: codedNewPass.hash,
            salt: codedNewPass.salt
        }, { where: { UserId: id } });
        if (updated)
            return res.status(201).json({ message: 'Senha alterada com sucesso' });
        else throw new Error();
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const login = async (req, res) => {
    try {
        const user = await usersModel.findOne({
            where: {
                email: req.body.email,
            }
        })
        if (!user)
            return res.status(404).json({ message: 'Usuário não encontrado' });

        const auth = await authModel.findOne({
            where: {
                UserId: user.id
            }
        })
        if (Auth.checkPassword(req.body.password, auth.hash, auth.salt)) {
            console.log(user)
            const token = Auth.generateJwt(user);
            return res.status(200).json({ token: token })
        } else {
            return res.status(401).json({ message: 'Senha inválida' })
        }
    } catch (error) {
        return res.status(500).json({ error })
    }
}

const buy = async (req, res) => {
    const { userId } = req.params;
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


async function addUserImage(request, response) 
{
        
        // const token = Auth.getToken(req);
        // const payload = Auth.decodeJwt(token);
        const { id } = request.params;

        const user = await usersModel.findByPk(id);

        if(!user) {
            return response.status(500).json({message: "Usuário não encontrado"});
        }

        if(!request.file) {
            return response.status(500).json({message: "Não foi feito o upload de nenhuma imagem"});
        }

        const path = process.env.APP_URL + "/uploads/image/" + request.file.filename;

        await user.update({
            image: path,
        });

        return response.status(200).json({message: "Foto adicionada com sucesso"});

    } catch (err) {
        return response.status(500).json(err);
    }
};

async function removeUserImage(request, response)
{
    try {

        // const token = Auth.getToken(req);
        // const payload = Auth.decodeJwt(token);
        const { id } = request.params;

        const user = await User.findByPk(id);

        if(!user) {
            return response.status(500).json({message: "Usuário não encontrado"});
        }

        if(!user.image) {
            return response.status(500).json({message: "Nenhuma imagem foi encontrada"});
        }

        const pathDb = user.image.split("/").slice(-1)[0]
        const photoImage = path.join(__dirname, '..', '..', 'uploads/images', pathDb);

        await fsPromise.unlink(photoImage);

        await user.update({
            image: null
        });

        return response.status(200).json({message: "Foto removida com sucesso"});

    } catch(err) {
        return response.status(500).json({message: "Erro ao remover a foto"});
    }

};


module.exports = {
    create,
    index,
    show,
    getDetails,
    update,
    destroy,
    avaliate,
    avaliations,
    changePass,
    buy,
    login,
    addUserImage,
    removeUserImage
}