import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import mongoose from 'mongoose'
const app = express()

mongoose.connect("mongodb://localhost:27017/CollectionName" , {useNewUrlParser :true})

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.get("/" , (req,res) =>{
    res.render("index")
})

export default app