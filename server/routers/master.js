const express = require('express')
const Master = require('../controllers/master')
const router = express.Router()

router.get('/',Master.findData)
router.post('/',Master.addData)
router.get('/:id',Master.findDataId)
router.put('/:id',Master.updateData)
router.delete('/:id',Master.deleteData)

module.exports = router