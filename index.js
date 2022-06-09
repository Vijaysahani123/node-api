// const http = require('http');
// const server = http.createServer();
// server.listen(3000,function(){
//     console.log('server is running')
// });


const http = require('http')
function handler(req, res) {
    switch (req.url) {
        case '/':
            res.write('Node API');
            break;
        case '/product':
            res.write('list of product');
            break;
        case '/books':
            const books = [
                 {id: 1, name: 'headfirst js', price: 25, instock: true},
                 {id: 2, name: 'coder js', price: 30, instock: false},
                 {id: 3, name: 'code js', price: 40, instock: true}
                ]
            res.write(JSON.stringify(books));
            break;
        case '/author':
            res.write('list of author');
            break;
        default:
            res.write('Not found');
            break;
    }
    res.end();
    // res.write('NodeJS API');
    // res.end(); 

}
const server = http.createServer(handler);
server.listen(3000, function () {
    console.log('server is running')
});