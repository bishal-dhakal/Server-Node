const { pool } = require('pg'); 
const bcrypt = require('bcrypt');


exports.Signup = async (req,res,next)=>{

    const { username, email,password } = req.body; 
 
    try{

        client.query(
            RegisterUser(
                req.body.username,
                req.body.email,
                req.body.password
            )
        )

        res.status(201).json({
            success: true
        })

    }catch(error){

    }

}