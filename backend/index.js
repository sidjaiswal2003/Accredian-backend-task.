import express from "express"
import bodyParser from "body-parser"
import routes from './Route/auth.js'
const app=express()
app.use(bodyParser.json())

app.use('/',routes)

app.listen(2000);

