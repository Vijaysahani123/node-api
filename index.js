const express = require('express');
// const defaultCtrl=require('./controllers/defaultCtrl');
// const bookCtrl =require('./controllers/bookCtrl')
const defaultRouter=require('./routes/defaultRouter');
const bookRouter=require('./routes/bookRouter');
const app = express();

app.listen(3000, function(){
    console.log('server is running on 3000');
}); 

// app.get('/', defaultCtrl.get);
// app.get('/health',defaultCtrl.health);
app.use(defaultRouter);
app.use(bookRouter);
// app.get('/books', bookCtrl.get);  
j