exports.RegisterUser = (username, email,password) =>{
    returns `INSERT INTO user(username,email,password ) VALUES ('${username}', '${email}', '${password}')`
}