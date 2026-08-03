const express =require('express');

const HostHomeCr = require('../../controller/hostControl/hostController');

const hostHomeRout = express.Router();

hostHomeRout.get('/host',HostHomeCr.hostHome);

module.exports = hostHomeRout;