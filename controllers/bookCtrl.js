const books = [
    { id: 1, name: 'mongo DB', price: 65, instock: true },
    { id: 2, name: 'react js', price: 75, instock: false },
    { id: 3, name: 'node js', price: 85, instock: true }
];

class bookCtrl {
    get(req, res) {
        // const books=[
        //     {id:1,name:'mongo DB',price:65,instock:true},
        //     {id:2,name:'react js',price:75,instock:false},
        //     {id:3,name:'node js',price:85,instock:true}
        // ];
        res.status(200);
        res.json(books);
    }

    getById(req, res) {
        const id = +req.params.id;
        console.log(req.params, 'parameters');
        let book;
        for (let i = 0; i < books.length; i++) {
            if (id === books[i].id) {
                book = books[i];
            }
        }

        if(book){
        res.status(200);
        res.json(book);
        }else{
            res.status(404)
            res.send('not found')
        }
    }

    create(req, res) {
        const payload = req.body;
        books.push(payload);
        res.status(201);
        res.end();
    }
}



module.exports = new bookCtrl();