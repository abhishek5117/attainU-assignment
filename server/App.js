const express= require('express')
const app = express()
const mongoose=require('mongoose')
const PORT=5000
const {MONGOURI} = require('./key')

require('./models/user')
app.use(express.json())
app.use(require('./routes/auth'))


mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})
mongoose.connection.on('connected',()=>{
    console.log("connected to Mongo yeahhh!!")
})
mongoose.connection.on('error',(err)=>{
    console.log("connected to Mongo yeahhh!!",err)
})

app.listen(PORT,()=>{
    console.log("Server is running on", PORT)
})