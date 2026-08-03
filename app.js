// external module
const express = require('express');
const path = require('path');

// local module
// const errorRouter = require('./routers/bothRouter/error');
const homeRouter = require('./routers/userRouter/homeRouter');
const detilRouter = require('./routers/userRouter/detils');
const favouriteRouter = require('./routers/userRouter/favourite');

const loginRouter = require('./routers/bothRouter/login');

const hostHomeRouter =require('./routers/hostRouter/hostHome');
const addHomeRouter= require('./routers/hostRouter/addHome');
const deletEditRouter = require('./routers/hostRouter/delet&edit');



const app = express();

app.use(express.urlencoded());

app.use(express.static(path.join(__dirname,'./public')))


app.use(homeRouter);
app.use(detilRouter);
app.use(favouriteRouter);

app.use(addHomeRouter);
app.use(hostHomeRouter);
app.use(deletEditRouter);

app.use(loginRouter);


app.use((req,res,next)=>{
  res.status(404).render('./headerView/error');
});

app.set('view engine','ejs');
app.set('views','views');




const port=3001;
app.listen(port,()=>{
  
  console.log(`server is running at http://localhost:${port}`);
});
