const express = require('express');

const errorRouter = express.Router();

errorRouter.use =(req,res,next)=>{
  res.status(404).render('./headerView/error');
};

module.exports=errorRouter;