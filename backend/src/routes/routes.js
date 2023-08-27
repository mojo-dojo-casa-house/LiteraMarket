const { Router } = require('express');
const router = Router();

const usersController = require('../controllers/UsersContoller');

router.post('/user', usersController.create);
router.get('/user', usersController.index);
router.get('/user/:id', usersController.show);
router.put('/user/:id', usersController.update);
router.delete('/user/:id', usersController.destroy);
router.post('/user/:idAvaliator/avaliate', usersController.avaliate);
router.get('/user/:id/avaliations', usersController.avaliations);
router.post('/user/:id/changepass', usersController.changePass);

const contactController = require('../controllers/ContactController');

router.post('/user/:id/contact/create', contactController.create);
router.get('/user/:id/contact', contactController.index);
router.put('/user/:id/contact/update', contactController.update);
router.delete('/user/:UserId/contact/delete', contactController.destroy)

module.exports = router;