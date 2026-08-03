const express =require('express');

const deletEdit = require('../../controller/hostControl/hostController');

const deletEditRouter = express.Router();

deletEditRouter.get('/delet/:homeid',deletEdit.deletControl);
deletEditRouter.get('/edit/:homeid',deletEdit.getUpdate);
deletEditRouter.post('/edit',deletEdit.postUpdate);

module.exports = deletEditRouter;