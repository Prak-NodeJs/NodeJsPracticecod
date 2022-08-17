const express = require('express');
const app = express();
const path = require('path')



const pathName = path.join(__dirname, '../public');
// console.log(pathName);
// app.use(express.static(pathName));
 
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        name: "PRAKASH"
    })
})


app.listen(8000, 'localhost');