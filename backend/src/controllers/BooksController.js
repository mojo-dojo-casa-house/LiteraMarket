const Books = require("../models/Books")

//Função para criar uma instancia de livro dados os atributos pela requisição
async function create(request, response)
{
    try
    {
        const book = await Books.create(
            {
                id: request.body.id,
                value: request.body.value,
                name: request.body.name,
                year: request.body.year,
                author: request.body.author,
                image: request.body.image,
                genre: request.body.genre
            }
        );
        return response.status(201).json({message:"Livro Cadastrado com sucesso", book:book});
    }
    catch(error)
    {
        return response.status(500).json({Error:error});
    }
}

//Função para pegar todos as instancias de livro do banco de dados
async function index(request, response)
{
    try
    {
        const books = await Books.findAll();
        return response.status(200).json({books:books});
    }
    catch(error)
    {
        return response.status(500).json({Error:error});
    }
}

//Função para pegar um livro especifico pelo seu id
async function show(request, response)
{
    const {id} = request.params;

    try
    {
        const book = await Books.findByPk(id);
        return response.status(200).json({book:book});
    }
    catch(error)
    {
        return response.status(500).json({Error:error});
    }
}

//Função para editar um livro especifico
async function update(request, response)
{
    const {id} = request.params;
    try
    {
        const [updated] = await User.update(request.body, {where: {id:id}});
        if(updated)
        {
            const book = await Books.findByPk(id);
            return response.status(200).json({status:"Livro atualizado", book:book});
        }
        throw new Error();
    }
    catch(error)
    {
        return response.status(500).json("Livro não encontrado")
    }
}

//Função para deletar um livro do banco de dados
async function destroy(request, response)
{
    const {id} = request.params;
    try
    {
        const deleted = await Books.destroy({where : {id:id}})
        if(deleted)
            return response.status(200).json("Livro deletado com sucesso")
        throw new Error();
    }
    catch(error)
    {
        return response.status(500).json("Livro não encontrado")
    }
}

//Exportando modulos
module.exports = 
{
    index,
    show,
    create,
    update,
    destroy
}