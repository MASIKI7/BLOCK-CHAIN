const express = require('express')
const layout = require('express-ejs-layouts')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('static'))

app.use(layout)

app.get('/',(req,res) => {
    let result = {}
    res.render('index',result)
})

app.listen(2500, (err)=>{
    if(err) throw err
    console.log("Server listening on port 2500");
})