const express =require('express');

const favouritCr = require('../../controller/userControl/homeController');

const favouriteRouter = express.Router();

favouriteRouter.get('/favourite',favouritCr.favouriteList);
favouriteRouter.post('/favourite',favouritCr.postFavourite);
favouriteRouter.get('/remove/:homeid',favouritCr.removeId);


module.exports = favouriteRouter;