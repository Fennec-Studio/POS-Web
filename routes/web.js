const express = require('express')
const router = express.Router()
const db = require('../db/query')
const path = require('path')
const fs = require('fs')
router.use(express.json());

router.get('/', async (req, res) =>{
    try {
        res.render('auth/login')
    } catch (error) {
        throw error
    }
})

module.exports = router