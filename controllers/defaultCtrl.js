function get(req,res){
    res.status(200);
    res.send('Hello Express JS');
}

function health(req,res){
    const status = {status:'up'};
    res.status(200);
    res.json(status); 
}

function author(req,res){
    
    res.status(200);
    res.send('List of author')
}

module.exports = {
    get,
    health,
    author
};