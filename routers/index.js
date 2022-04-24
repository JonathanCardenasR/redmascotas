const { Router } = require('express');

const router = Router();

const homeController = require('../controllers/home.controller')
const userController = require('../controllers/user.controller')
const vetController = require('../controllers/vet.controller')

router.get('/', homeController.getHome)
router.get('/', homeController.getHome)

router.get('/vet/create/:id', vetController.getCreateVet)
router.post('/vet/create', vetController.createVet)

module.exports = router;


