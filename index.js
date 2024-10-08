const express = require ('express')
const cors = require ('cors')
const bodyParser = require ('body-parser')
const { connectDb , mongoose } = require('./db')
require('dotenv').config();
const { handleRegistration , handleLogin } = require('./Service')

const app = express()

app.use(cors())
app.use(bodyParser.json())
connectDb()


app.get('/' , (req,res) => {
 if(mongoose.connection.readyState === 1){
    res.send("Server working fine and connected to Database successfully")
    return;
 }
 res.send("Server working fine")
})

app.post('/registration' , ( apiReq, apiRes ) => {
    handleRegistration(apiReq , apiRes)
})

app.get('/login/:username/:password' , (apiReq , apiRes) => {
    handleLogin(apiReq , apiRes)
})


app.listen(4000 , () => {
    console.log("Server started at 4000")
})