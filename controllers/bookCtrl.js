class bookCtrl{
    get(req,res){
        const books=[
            {id:1,name:'mongo DB',price:65,instock:true},
            {id:1,name:'react js',price:75,instock:false},
            {id:1,name:'node js',price:85,instock:true}
        ];
        res.status(200);
        res.json(books);
    }
}

module.exports=new bookCtrl();