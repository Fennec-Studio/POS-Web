const express = require('express')
const router = express.Router()
const db = require('../db/query')
router.use(express.json());


module.exports = router