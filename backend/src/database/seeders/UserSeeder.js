const { pt_BR } = require("faker-br/lib/locales");
const User = require("../../models/Users");
const faker = require('faker-br');
const Auth = require("../../models/Auth");
const Contact = require("../../models/Contact");
const PaymentCard = require("../../models/PaymentCards");
const PixKeys = require("../../models/PixKeys");
const Addresses = require("../../models/Addresses");

const seedUser = async function () {
    try {
        await User.sync({ force: true });

        for (let i = 0; i < 10; i++) {
            await User.create({
                name: faker.name.firstName(),
                email: faker.internet.email(),
            });
        }
        await Addresses.sync({ force: true });
        for (let i = 1; i <= 10; i++) {
            await Addresses.create({
                cep: faker.address.zipCodeValidByState(),
                street: faker.address.streetName(),
                number: faker.random.number({ max: 9999 }),
                complement: faker.random.words(),
                UserId: i,
            });
        }
        await Auth.sync({ force: true });
        for (let i = 1; i <= 10; i++) {
            await Auth.create({
                UserId: i,
                salt: faker.random.alphaNumeric({ max: 10 }),
                hash: faker.random.alphaNumeric({ max: 30 }),
            });
        }
        await Contact.sync({ force: true });
        for (let i = 1; i <= 10; i++) {
            await Contact.create({
                codCountry: faker.random.number({ max: 2, min: 2 }),
                codArea: faker.random.number({ max: 2, min: 2 }),
                number: faker.random.number({ max: 9, min: 2 }),
                UserId: i,
            });
        }
        await PaymentCard.sync({ force: true });
        for (let i = 1; i <= 10; i++) {
            await PaymentCard.create({
                accountNumber: faker.br.credit_card(),
                securityCode: faker.random.number({ max: 100, min: 999 }),
                flag: faker.random.word(),
                UserId: i,
            });
        }
        await PixKeys.sync({ force: true });
        for (let i = 1; i <= 10; i++) {
            if(i<2)
            await PixKeys.create({
                type: 'cpf',
                key: faker.br.cpf(),
                UserId: i,
            });
            if(i<5)
            await PixKeys.create({
                type: 'cnpj',
                key: faker.br.cnpj(),
                UserId: i,
            });
            if(i<7)
            await PixKeys.create({
                type: 'email',
                key: faker.internet.email(),
                UserId: i,
            });
            if(i<9)
            await PixKeys.create({
                type: 'fone',
                key: faker.phone.phoneNumber(),
                UserId: i,
            });
            if(i>=9)
            await PixKeys.create({
                type: 'random',
                key: faker.random.alphaNumeric(),
                UserId: i,
            });
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = seedUser;