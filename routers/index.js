const { Router } = require('express');

const router = Router();

const homeController = require('../controllers/home.controller')
const userController = require('../controllers/user.controller')
const vetController = require('../controllers/vet.controller')

router.get('/', homeController.getHome)

router.get('/chat', userController.getChat)

router.post('/chat-global', userController.postChat)

router.get('/chat-global', userController.getChatPrincipal)


router.get('/vet/create/:id', vetController.getCreateVet)
router.post('/vet/create/:id', vetController.createVet)

router.get('/user/change_pass/:id', userController.getChangePass)
router.post('/user/change_pass/:id', userController.changePass)

module.exports = router;


