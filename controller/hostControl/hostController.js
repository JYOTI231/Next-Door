const Home =require('../../model/homeModel'); 

// const registerhome =[];

exports.getHomecontrol=(req,res,next)=>{

  res.render('./hostView/addHome',{editing:false});
}

exports.postHomecontrol=(req,res,next)=>{
  const {homephoto,homename,adders,price,email,description}=req.body;
 
  // registerhome.push(req.body);
  const home = new Home(homephoto,homename,adders,price,email,description);

  home.save().then(()=>{
    res.redirect('/addhome');
  }).catch((error)=>{
    console.log('error adding home',error);
  });
};


exports.hostHome =(req,res,next)=>{

  Home.fatchData().then(([registerhome])=>{
    res.render('./hostView/hostHome',{home:registerhome});
  })
 
}


exports.deletControl = (req,res,next)=>{

  const homeid = req.params.homeid;
  Home.deletById(homeid).then(()=>{
      res.redirect('/host');
  }).catch(error =>{
    console.log('error during delet home',error);
  });
}


exports.getUpdate =(req,res,next)=>{
  const homeid = req.params.homeid;
  const editing = req.query.editing==='true';
  Home.findById(homeid).then(([homes])=>{
    const home =homes[0];
    if(!home){
      console.log('Home is not found');
      res.redirect('/host');
    }else{
      res.render('./hostView/addHome',{home:home,editing:editing});
    }
  });
}


exports.postUpdate=(req,res,next)=>{

  const{homephoto,homename,adders,price,email,description,id}=req.body;
  const home = new Home(homephoto,homename,adders,price,email,description,id); 

  
  home.save().then(()=>{
    res.redirect('/host');
  }).catch((error)=>{
    console.log('error editing home',error);
  });
};


// exports.registerhome=registerhome;