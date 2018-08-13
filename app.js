const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = 5000;


const app = express();

//set the public folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middle ware
app.use(bodyParser.urlencoded({extended:true}));

//Index Route
app.get('/', (req, res)=>{
    //res.send('Hello World');
    res.sendfile('index.html');
});

const pdfRoute = require('./routes/pdfmake');
app.use('/pdfMake', pdfRoute);




app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}/`);
});

