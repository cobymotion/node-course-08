
const userGet = (req,res) => {
    const params = req.query;
    const body = req.body; 
    
    res.json({
        body,
        params
    });
}

const userAdd = (req,res) => {
    const body = req.body; 
 
    res.json({
        body
    });
}

const userPut = (req,res) => {
    const id = req.params.id;
     
    res.json({
        msg:'Put API',
        id
    });
}


module.exports = {
    userGet,
    userAdd,
    userPut
}