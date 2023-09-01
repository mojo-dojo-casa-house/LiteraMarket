const { Op } = require("sequelize");
const Books = require("../models/Books");
const fsPromise = require('fs').promises;
const Auth = require('../config/auth')
const usersModel = require('../models/Users')

//Função para criar uma instancia de livro dados os atributos pela requisição
async function create(request, response) {
    try {
        const token = Auth.getToken(request);
        const payload = Auth.decodeJwt(token);
        const user = await usersModel.findByPk(payload.sub);
        if (!user)
            return res.status(404).json({ message: 'Usuário não encontrado' });
        const book = await Books.create(
            {
                value: request.body.value,
                name: request.body.name,
                year: request.body.year,
                author: request.body.author,
                image: request.body.image,
                genre: request.body.genre,
                SellerId: user.id
            }
        );
        return response.status(201).json({ message: "Livro Cadastrado com sucesso", book: book });
    }
    catch (error) {
        return response.status(500).json({ Error: error });
    }
}

//Função para pegar todos as instancias de livro do banco de dados
async function index(request, response) {
    try {
        const books = await Books.findAll({
            where: {
                [Op.and]: request.body
                //Esse where cria um filtro por categorias que são passadas pelo body da requisição
            }
        });
        return response.status(200).json({ books: books });
    }
    catch (error) {
        return response.status(500).json({ Error: error });
    }
}

//Função para pegar um livro especifico pelo seu id
async function show(request, response) {
    const { id } = request.params;

    try {
        const book = await Books.findByPk(id);
        return response.status(200).json({ book: book });
    }
    catch (error) {
        return response.status(500).json({ Error: error });
    }
}

//Função para editar um livro especifico
async function update(request, response) {
    try {
        const token = Auth.getToken(request);
        const payload = Auth.decodeJwt(token);
        const user = await usersModel.findByPk(payload.sub);
        if (!user)
            return res.status(404).json({ message: 'Usuário não encontrado' });
        const [updated] = await Books.update(request.body, {
            where: {
                id: request.body.id,
                SellerId: user.id
            }
        });
        if (updated) {
            const book = await Books.findByPk(request.body.id);
            return response.status(200).json({ status: "Livro atualizado", book: book });
        }
        throw new Error();
    }
    catch (error) {
        return response.status(500).json("Livro não encontrado")
    }
}

//Função para deletar um livro do banco de dados
async function destroy(request, response) {
    try {
        const token = Auth.getToken(request);
        const payload = Auth.decodeJwt(token);
        const user = await usersModel.findByPk(payload.sub);
        if (!user)
            return res.status(404).json({ message: 'Usuário não encontrado' });
        const deleted = await Books.destroy({
            where: {
                id: request.body.id,
                SellerId: user.id
            }
        })
        if (deleted)
            return response.status(200).json("Livro deletado com sucesso")
        throw new Error();
    }
    catch (error) {
        return response.status(500).json("Livro não encontrado")
    }
}

async function addBookImage(request, response) {
    try {

        const token = Auth.getToken(request);
        const payload = Auth.decodeJwt(token);
        const user = await usersModel.findByPk(payload.sub);
        if (!user)
            return res.status(404).json({ message: 'Usuário não encontrado' });

        const book = await Books.findByPk(id);

        if (!book) {
            return response.status(500).json({ message: "Usuário não encontrado" });
        }

        if (!request.file) {
            return response.status(500).json({ message: "Não foi feito o upload de nenhuma imagem" });
        }

        const path = process.env.APP_URL + "/uploads/image/" + request.file.filename;

        await book.update({
            image: path,
        });

        return response.status(200).json({ message: "Foto adicionada com sucesso" });

    } catch (err) {
        return response.status(500).json(err);
    }
};

async function removeBookImage(request, response) {
    try {

        const token = Auth.getToken(request);
        const payload = Auth.decodeJwt(token);
        const user = await usersModel.findByPk(payload.sub);
        if (!user)
            return res.status(404).json({ message: 'Usuário não encontrado' });

        const book = await Books.findByPk(id);

        if (!book) {
            return response.status(500).json({ message: "Usuário não encontrado" });
        }

        if (!book.image) {
            return response.status(500).json({ message: "Nenhuma imagem foi encontrada" });
        }

        const pathDb = book.image.split("/").slice(-1)[0]
        const photoImage = path.join(__dirname, '..', '..', 'uploads/images', pathDb);

        await fsPromise.unlink(photoImage);

        await book.update({
            image: null
        });

        return response.status(200).json({ message: "Foto removida com sucesso" });

    } catch (err) {
        return response.status(500).json({ message: "Erro ao remover a foto" });
    }

};

//Exportando modulos
module.exports =
{
    index,
    show,
    create,
    update,
    destroy,
    addBookImage,
    removeBookImage
}