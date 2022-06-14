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

        if (book) {
            res.status(200);
            res.json(book);
        } else {
            res.status(404)
            res.send('not found')
        }
    }

    isPayloadValid(payload) {
        return payload.id && payload.name && payload.price;
    }

    create = (req, res) => {
        const payload = req.body;

        if (this.isPayloadValid(payload)) {
            books.push(payload)

            res.status(201);
            res.send();
        } else {
            res.status(400);
            res.send('invalid payload');

        }
    }

    delete = (req, res) => {
        const id = +req.params.id;
        for (let i = 0; i < books.length; i++) {
            if (books[i].id === id) {
                books.splice(i, 1);
                break;
            }
        }
        res.status(204);
        res.send();
    }

    update = (req, res) => {
        const id = +req.params.id;
        const payload = req.body;

        for (let i = 0; i < books.length; i++) {
            if (books[i].id === id) {
                books[i].name = payload.name;
                books[i].price = payload.price;
            }
        }
        res.status(204);
        res.send();
    }

    patch = (req, res) => {
        const id = +req.params.id;
        const payload = req.body;

        const book = books.find(elem=>elem.id === id);
        
        if (book) {
            for (let key in payload) {
                book[key] = payload[key];
            }
            res.status(204);
            res.send();
        } else { 
            res.status(404);
            res.send('not found');
        }
    }

}



module.exports = new bookCtrl();