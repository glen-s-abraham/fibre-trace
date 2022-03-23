const express = require('express')
const {getSession}=require('./neo4j')
const {traceFromOnu}= require('./controllers/TraceController')
const app = express()

app.use(express.json())

app.get('/ping',(req,res,next)=>{
    res.status(200).send('Alive')
})

app.get('/trace/onu/:onuId',traceFromOnu)


module.exports = app