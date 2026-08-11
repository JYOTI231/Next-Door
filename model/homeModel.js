const db = require('../util/databaseUtil');


const path = require('path');
const dataPath = path.join(__dirname,'../data/registerHome.json');
const fvHome = require('./favouritemodel');

const getdb = require('../util/databaseUtil').getdb;

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
    
  }

  save(){
    const db = getdb();
    return db.collection('home').insertOne(this).then((result)=>{
      console.log('data inserted successfully');
    })
  }

  static findById(homeid){
    
    
  }

  static deletById(homeid){
    
  }
  
}