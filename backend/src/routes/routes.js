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



//------------------Rotas específicas para o APP------------------------/



//Rotas para upload de arquivos
const imageUpload = require("../config/files");

router.post("/private/user/addImage/:id", imageUpload.single("image"), usersController.addUserImage);
router.delete("/private/user/removeImage/:id", usersController.removeUserImage);

router.post("/private/book/addImage/:id", imageUpload.single("image"), booksController.addBookImage);
router.delete("/private/book/removeImage/:id", booksController.removeBookImage);

module.exports = router;