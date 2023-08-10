const objectId = require('mongoose').Types.ObjectId

// code check the database id is valid or not
const validateDbId = (req, res, next) => {
    if(objectId.isValid(req.params.id) == false){
        res.status(400).json({
            error: `Given id ${req.params.id} is not valid`
        })
    } else {
        next();
    }
}

// code to respond 404 error message
const raise404error = (req, res) =>{
    res.status(404).json({
        error: `No data found for id ${req.params.id}`    
    })
}


//code to handle common errors
const errorHandles = (err, req, res, next)=>{
    res.status(500).json({error})
}

module.exports = {validateDbId, raise404error, errorHandles}