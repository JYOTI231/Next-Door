const express =require('express');

const logRouter = express.Router();

logRouter.get('/login',(req,res,next)=>{
  
  res.render('./headerView/login');
 
});

module.exports=logRouter;