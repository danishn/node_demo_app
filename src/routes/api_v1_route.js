const router = require("express-promise-router")()

// ------------------------- include all controllers here ----------------------------
const apiController = require('../controllers/api.controller')
const userController = require('../controllers/user.controller')

// all API routes goes from here
router.get('/ping', apiController.ping)

router.get('/users', userController.get_all)
router.post('/user', userController.create)

// ------------------------- Final Setup & 404 Routes ----------------------------
router.get('/', (_request, response) => { response.status(200).json({ message: `API version: 1.0.0` }) })
router.use("*", (_request, response) => { response.status(404).json({ message: "API not found" }) })

module.exports = router
