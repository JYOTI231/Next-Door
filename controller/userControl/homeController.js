const Home = require('../../model/homeModel');
const fvHome = require('../../model/favouritemodel');

// const registerdata = require('../hostControl/hostController');

exports.homeControl=(req,res,next)=>{

// const home = registerdata.registerhome;  

Home.fatchData().then(([home]) =>{
  res.render('./userView/homepage',{home:home}); 
})
  // res.render('./userView/homepage',{home:home}); 
}


exports.detilControl=(req,res,next)=>{
  const homeid = req.params.homeid;

  Home.findById(homeid).then(([homes]) =>{
    const home = homes[0];
    if(!home){
     res.redirect('/');
    }else{ 
      res.render('./userView/detils',{home});
    }
  });
}


exports.favouriteList =(req,res,next)=>{
  
 fvHome.getFavourite(home=>{
    Home.fatchData().then(([allHome])=>{
      const favourite = home.map(mHome=> allHome.find(fHome=> fHome.id=== mHome));
    res.render('./userView/favourite',{home:favourite});
    })
  })
}

exports.postFavourite=(req,res,next)=>{
  const homeid = req.body.id;
  fvHome.setFavourite(homeid,error=>{
    if(error){
      console.log('error occure... ',error);
    }else{
      res.redirect('/favourite');
    }
  })

}


exports.removeId =(req,res,next)=>{
  const homeid = req.params.homeid;
  fvHome.removeById(homeid,error=>{
    if(!error){
      res.redirect('/favourite');
    }else{
      console.log('this home is not in favourite list',error);
    }
  });
}