const { Pool } = require('pg');
const { isModuleNamespaceObject } = require('util/types');
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'Users',
    password:'bishal',
    port:5432,
})

module.exports ={
 query:( text, params) => pool.query(text,params),
}