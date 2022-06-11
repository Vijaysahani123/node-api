const express = require('express');
const bodyParser=require('body-parser');
// const defaultCtrl=require('./controllers/defaultCtrl');
// const bookCtrl =require('./controllers/bookCtrl')
const defaultRouter=require('./routes/defaultRouter');
const bookRouter=require('./routes/bookRouter');

const app = express();

app.listen(3000, function(){
    console.log('server is running on 3000');
}); 

app.use(bodyParser.json());

// app.get('/', defaultCtrl.get);
// app.get('/health',defaultCtrl.health);
app.use('/',defaultRouter);
app.use('/api/books',bookRouter);
// app.get('/books', bookCtrl.get);  
