const express = require('express')
const router = express.Router()
const db = require('../db/query')
const tools = require('../extras/tools')
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

router.get('/users', async (req, res) =>{
    try {
        if(req.query.p) {
            let usersData = (await db.users.getAll(parseInt(req.query.p))).data
            //Cambiar url por la ruta de la vista
            res.render('partials/table', {
                data: tools.generateTable("user", usersData)
            })
        } else {
            let usersData = (await db.users.getAll(0)).data
            res.render('home/users/index', {
                data: tools.generateTable("user", usersData)
            })
        }
    } catch (error) {
        throw error
    }
})

module.exports = router