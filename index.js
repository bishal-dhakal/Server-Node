const express = require('express')
const app = express()
const port = 3000
const UserRoutes = require('./Routes/user.routes')
const bodyParser = require('body-parser');

app.use(express.json())
app.use('/api',UserRoutes)

app.listen(port,()=>{
console.log(`App listening on port ${port}`)
})