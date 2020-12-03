const express = require('express');
//===========================//
let app = express();
//===========================//

//import model from categorySchema --> used for creation of objets using 'new'
let Category = require('../models/category');



//========================================================================================//

//==============================   GET categories  ======================================//


app.get('/category', (req, res) => {
    //.find({ search all users})
    Category.find({})

});