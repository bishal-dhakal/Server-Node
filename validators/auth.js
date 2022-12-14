const { check } = require('express-validator');
const db = require('../db')
const {compare} = require('bcryptjs');

const password = check('password').isLength({min:8,max:15}).withMessage('Password has to be longer than 8 characters.')

const email = check('email').isEmail().withMessage('Please provide a valid email.')

const emailExits = check('email').custom(async (value) =>{
    const { rows } = await db.query('SELECT * from users WHERE email =$1',[
        value,
    ])

    if (rows.length){
        throw new Error('Email already exits.')
    }
})

const loginFieldsCheck = check('email').custom(async (value, {req})=>{
    const user = await db.query('SELECT * from users WHERE email = $1 ',[value])
    if(!user.rows.length){
        throw new Error('Email does not exits.')
    }
    const validPassword = await compare(req.body.passsword, user.rows[0].password)

    if(!validPassword){
        throw new Error('Wrong Password')
    }

    req.user = user.rows[0]
})

module.exports ={
    registerValidation :[ email,password, emailExits],
    loginValidation:[loginFieldsCheck],
    }