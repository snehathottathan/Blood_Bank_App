const express = require('express')
const { testController } = require('../controllers/testController')


// Router object
const router = express.Router()

router.get("/",testController)

// export
module.exports = router;