const express = require('express');
const router = express.Router();
const user = require('../models/user_models');
const { crudMethods } = require('../services');
const { validateDbId, raise404error } = require('../middleware');
const userCrud = crudMethods(user);

// Get all users
router.get('/', (req, res, next)=>{
    userCrud.getAll()
    .then(data=>res.send(data))
    .catch(err=>next(err))
})

// Get single user
router.get('/:id', validateDbId, (req, res, next)=>{
    userCrud.getById(req.params.id)
    .then( data => {
        if(data){
            res.send(data)
        } else {
            raise404error(req,res);
        }
    })
    .catch(err=>next(err))
} )
// create new user
router.post('/', (req, res, next)=>{
    userCrud.create(req.body)
    .then(data => res.send(data))
    .catch(err=>next(err));
})

// update user

router.put('/:id', validateDbId, (req, res, next)=>{
    userCrud.update(req.params.id, req.body)
    .then(data=>{
        if(data){
            res.send(data)
        } else {
            raise404error(req, res);
        }
    })
    .catch(err=>next(err))
})

// Delete user

router.delete('/:id', validateDbId, (req, res, next)=>{
    userCrud.delete(req.params.id)
    .then(data=>{
        if(data){
            res.send(data)
        } else {
            raise404error(req,res);
        }
    })
    .catch(err=>next(err))
})


module.exports = router;