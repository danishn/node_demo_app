const router = require("express-promise-router")()

// ------------------------- include all controllers here ----------------------------
const commonController = require('../controllers/common.controller')

// all web routes goes here
router.get('/ping', commonController.ping)

router.get('/', commonController.home)

// ------------------------- Final Setup & 404 Routes ----------------------------
router.use("*", (_req, resp) => { resp.render("404") })

module.exports = router
