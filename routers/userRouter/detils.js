const express =require('express');

const detilsCr = require('../../controller/userControl/homeController');

const detilsRouter = express.Router();

detilsRouter.get('/detil/:homeid',detilsCr.detilControl);


module.exports = detilsRouter;