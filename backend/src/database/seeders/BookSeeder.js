const Book = require("../../models/Books");
const faker = require('faker-br');

//Função para criar seeders de livros
async function seedBook()
{
    try
    {
        await Book.sync({ force: true });

        for(let i = 0; i < 10; i++)
        {
            await Book.create({
                value: faker.commerce.price(),
                name: faker.name.title(),
                year: faker.date.past(),
                author: `${faker.name.firstName()} ${faker.name.lastName()}`,
                image: faker.image.abstract(),
                genre: faker.random.word()
            })
        }
    }
    catch(error)
    {
        console.log(error)
    }
}

module.exports = seedBook;