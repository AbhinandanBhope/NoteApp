const express = require("express");

const  router = require("./routes/route."); 
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');




const app = express();
app.use(cors());
const PORT = 3000;
app.use(express.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use("/",router);

app.listen(PORT)
    
