const fs = require('fs');
const path = require('path');

const datapath = path.join(__dirname,'../data/favouriteData.json');

module.exports= class favouriteHome {
  static setFavourite=(id,callback)=>{
    this.getFavourite(home=>{
      if(home.includes(id)){
        console.log('this home is allrady exit.. ');
      }else{
        home.push(id);
        fs.writeFile(datapath,JSON.stringify(home),callback);
      }
    })
  }

  static getFavourite(callback){
    fs.readFile(datapath,(err,data)=>{
      callback( !err ? JSON.parse(data) :[]);
    });
  }


  static removeById(homeid,callback){
    this.getFavourite(home=>{
      home = home.filter(Home=> Home!==homeid);
    
      fs.writeFile(datapath,JSON.stringify(home),callback);
    })
  }

  
}