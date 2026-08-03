const express =require('express');

const addHomeControl =require('../../controller/hostControl/hostController');

const hostRoute = express.Router();

hostRoute.get('/addHome',addHomeControl.getHomecontrol);
hostRoute.post('/addHome',addHomeControl.postHomecontrol);


module.exports=hostRoute;