const { Router } = require('express');

const router = Router();

const homeController2 = require ('../controllers/home.controller2')
const homeController0 = require('../controllers/home.controller0')
const homeController = require('../controllers/home.controller')
const userController = require('../controllers/user.controller')
const vetController = require('../controllers/vet.controller')

router.get('/',homeController0.getPrincipal)

router.get('/PetBook',homeController2.getPetBook)

router.get('/Perfil', homeController.getHome)

router.get('/chat', userController.getChat)

router.post('/chat-global', userController.postChat)

router.get('/chat-global', userController.getChatPrincipal)


router.get('/vet/create/:id', vetController.getCreateVet)
router.post('/vet/create/:id', vetController.createVet)

router.get('/user/change_pass/:id', userController.getChangePass)
router.post('/user/change_pass/:id', userController.changePass)

module.exports = router;


