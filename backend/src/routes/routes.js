const { Router } = require('express');
const passport = require('passport');

const router = Router();


const usersController = require('../controllers/UsersContoller');

router.use("/private", passport.authenticate('jwt', {session: false}));
router.get('/private/getdetails', usersController.getDetails)

router.post('/register', usersController.create);
router.get('/user/index', usersController.index);
router.get('/user/:id', usersController.show);

router.put('/user/:id', usersController.update);
router.delete('/user/:id', usersController.destroy);
router.post('/user/:idAvaliator/avaliate', usersController.avaliate);
router.get('/user/:id/avaliations', usersController.avaliations);
router.post('/user/:id/changepass', usersController.changePass);
router.post('/user/:userId/buy', usersController.buy);
router.get('/login', usersController.login);

const contactController = require('../controllers/ContactController');

router.post('/user/:userId/contact/create', contactController.create);
router.get('/user/:userId/contact', contactController.index);
router.put('/user/:userId/contact/update', contactController.update);
router.delete('/user/:userId/contact/delete', contactController.destroy)

const addressController = require('../controllers/AddressController');

router.post('/user/:userId/Address/create', addressController.create);
router.get('/user/:userId/Address', addressController.index);
router.put('/user/:userId/Address/update', addressController.update);
router.delete('/user/:userId/Address/delete', addressController.destroy);

const paymentController = require('../controllers/PaymentCardsController');

router.post('/user/:userId/paymentCards/addCard', paymentController.create);
router.get('/user/:userId/paymentCards', paymentController.index);
router.put('/user/:userId/paymentCards/update', paymentController.update);
router.delete('/user/:userId/paymentCards/delete', paymentController.destroy);

const pixKeysController = require('../controllers/PixKeysController');

router.post('/user/:userId/pixkeys/add', pixKeysController.create);
router.get('/user/:userId/pixkeys', pixKeysController.index);
router.delete('/user/:userId/pixkeys/delete', pixKeysController.destroy);

const favoriteController = require('../controllers/FavoritesController')

router.post('/user/:userId/addfavorite', favoriteController.create);
router.get('/user/:userId/favorites', favoriteController.index);
router.delete('/user/:userId/deletefavorite', favoriteController.destroy);

const booksController = require("../controllers/BooksController");

router.post("/user/:userId/books/add", booksController.create);
router.get("/books/:id", booksController.show); 
router.get("/books", booksController.index); 
router.put("/user/:userId/books/edit", booksController.update);
router.delete("/user/:userId/books/delete", booksController.destroy);

const CartController = require('../controllers/CartController')

router.post('/user/:userId/addcart', CartController.create);
router.get('/user/:userId/cart', CartController.index);
router.delete('/user/:userId/deletecart', CartController.destroy);

const commentController = require('../controllers/CommentsController');

router.post('/user/:userId/books/addComment', commentController.create);
router.put('/user/:userId/books/editComment', commentController.update);
router.get('/books/:bookId/comments', commentController.index);
router.delete('/user/:userId/books/deleteComment', commentController.destroy);

//Rotas para upload de arquivos
const imageUpload = require("../config/files");

router.post("/private/user/addImage/:id", imageUpload.single("image"), usersController.addUserImage);
router.delete("/private/user/removeImage/:id", usersController.removeUserImage);

router.post("/private/book/addImage/:id", imageUpload.single("image"), booksController.addBookImage);
router.delete("/private/book/removeImage/:id", booksController.removeBookImage);

//------------------Rotas específicas para a integração------------------------/


router.get('/login', usersController.login);
/* 
Serve para realizar login na página. 

Parâmetros do Body: 
    email - Fazer login com o Email do usuário.
    password

Retorno: devolve o token do usuário. Guarde ele e use-o no header das requisições da seguinte forma:

    Authorization: Bearer <token>
*/

router.post('/registrar', usersController.create);
/* 
Serve para realizar login na página. 

Parâmetros do Body: 
    name
    email - Irá gerar um erro se não for único
    password

Retorno: devolve o token do usuário. Guarde ele e use-o no header das requisições da seguinte forma:

    Authorization: Bearer <token>
*/

router.get("/home", booksController.index);
/*
    Vai, simplesmente, retornar as informações de todos os livros 
 */

router.get("/livro/:id", booksController.show); 
/*
    Retorna informações sobre um livro específico. Na query, é passado o id do livro.
*/
router.get('/livro/:LivroId/comments', commentController.index);
/*
    A rota para os comentários dos livros que aparecem na página do livro é essa
*/


//A PARTIR DAQUI, TODAS AS ROTAS PRECISAM DO TOKEN DE USUÁRIO PARA SEREM ACESSADAS
router.use("user/", passport.authenticate('jwt', {session: false}));

router.post('user/MudarSenha', usersController.changePass);
/*
    Serve para realizar login na página. 

Parâmetros do Body: 
    password - senha antiga
    newPassword - nova senha

O token da senha antiga continua válido
*/

//------------rotas para o perfil-----------------//

router.get('/user/perfil', usersController.show);
//retorna nome e email do usuário
router.get('/user/Endereco', addressController.index);
//retorna os endereços de um usuário
router.post('/user/Endereco/add', addressController.create);
/*
    Serve para criar endereços do usuário
Parâmetros do Body: 
    cep - 8 dígitos núméricos sem hífen
    street
    number
    complement
    city
    state

*/
router.put('/user/Endereco/alterar', addressController.update);
//mudar um endereço. Mesma coisa que o adicionar, mas passando o id por body
router.delete('user/Endereco/excluir', addressController.destroy);
//Deleta um endereço. Passar o id pelo body

router.get('/user/Favoritos', favoriteController.index);
router.put('user/Favoritos/add', favoriteController.create);
//passar o id do livro no body
router.delete('/user/Favoritos/delete', favoriteController.destroy);
//passar o id do livro no body

router.post('user/Endereco/add', addressController.create);
/*
    Serve para realizar login na página. 

Parâmetros do Body: 
    cep - 8 dígitos núméricos sem hífen
    street
    number
    complement
    city
    state

*/
router.put('/user/Contato/alterar', contactController.update);
//mudar um endereço. Mesma coisa que o adicionar, mas passando o id por body

router.get('/user/Contatos', contactController.index);
router.post('/user/Contatos/add', favoriteController.create);
/*
    Serve para criar contatos do usuário
Parâmetros do Body: 
    codArea
    codPais - default: 55
    number

*/
router.delete('/user/Contact/delete', favoriteController.destroy);
//passar o id do livro no body

router.delete('/user/Livro/delete', booksController.destroy);
//passar o id do livro no body
router.put('/user/livro/update', favoriteController.destroy);
//passar o id e informações a serem alteradas do livro no body
/*
Parametros do body:
value
name
year
author
image
genre
*/
router.post('/user/livro/add', booksController.create);

router.post('/user/cartao/add', paymentController.create);
/*  Parâmetros
accontNumber
valid - é o vencimento do cartão. formato mm/AA
    entradas aceitas: 03/28 12/30
    entradas incorretas: 13/30 3465/324872
flag
securityCode
*/
router.get('/user/cartao/', paymentController.index);
router.put('/user/cartao/editar', paymentController.update);
router.delete('/user/cartao/excluir', paymentController.destroy);

router.post('/user/pix/add', pixKeysController.create);
/*
Parametros: type e key
possui verificação para comparar type e key
*/
router.delete('/user/pix/excluir', pixKeysController.destroy);
router.get('/user/pix/', pixKeysController.index);



module.exports = router;