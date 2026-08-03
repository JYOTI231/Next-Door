const express =require('express');

const homecontrol = require('../../controller/userControl/homeController'); 

const homeRoute = express.Router();

homeRoute.get('/', homecontrol.homeControl);

module.exports=homeRoute;