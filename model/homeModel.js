const db = require('../util/databaseUtil');


const path = require('path');
const dataPath = path.join(__dirname,'../data/registerHome.json');
const fvHome = require('./favouritemodel');

module.exports = class Home{

  constructor(homephoto,homename,adders,price,email,description,id){
    this.homephoto=homephoto;
    this.homename=homename;
    this.adders =adders;
    this.price =price;
    this.email=email;
    this.description = description;
    this.id =id;
   
  }

  static fatchData(){
    return db.execute('SELECT * FROM homes')
  }

  save(){
    if(this.id){
      return db.execute('UPDATE homes SET homephoto=?,homename=?,adders=?,price=?,email=?,description=? WHERE id=?',[this.homephoto,this.homename,this.adders,this.price,this.email,
      this.description,this.id]);
    }else{
     return db.execute('INSERT INTO homes(homephoto,homename,adders,price,email,description)VALUES(?,?,?,?,?,?)',[this.homephoto,this.homename,this.adders,this.price,this.email,this.    description]);
    }
  }

  static findById(homeid){
    
    return db.execute('SELECT * FROM homes WHERE id=?', [homeid]);
  }

  static deletById(homeid){
    return db.execute('DELETE FROM homes WHERE id=?',[homeid]);
  }
  
}