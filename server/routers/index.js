const express = require('express')
const router = express.Router()
const master = require('./master')
const transaksi = require('./transaksi')

router.get('/',(req, res)=>{
    res.send('API active...')
})

router.use('/master', master )
// router.use('/transaksi', transaksi )

module.exports = router;