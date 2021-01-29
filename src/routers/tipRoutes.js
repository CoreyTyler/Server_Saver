const express = require('express')
//const mysql = require('mysql');
const router = express.Router()
const tipController = require('../controllers/tipRoutes')

router.get("/", tipController.seeIfConnected)


router.get("/postTips", tipController.postTips)

router.get("/getTips", tipController.getTips)

router.get("/tipsForTable", tipController.tipsForTable)

router.delete("/deleteTip/:id", tipController.deleteTip)

router.get("/getAustinWeather", tipController.getWeather)



module.exports = router