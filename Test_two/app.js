//ROUTES
const express = require("express");
//INITIALIZE
const app = express();

// FS:
const fs = require("fs");

//Multer:
const multer = require("multer");

// Tesseract

const{tsWorker} = require("tesseract.js");
const worker = new tsWorker()


// STORAGE
const storage = multer.diskStorage({
    //destination
    destination: (req, res, cb) =>{
        //Set destinantion
        cb(null,"./uploads")
    },
    //FileName
    filename: (req,res,cb) =>{
        cb(null,req.file)
    }
});

// Whit this multer load the destination and the file name
const upload = multer({storage: storage}).single('text');


//Use ejs for view html+js
app.set("view engine", "ejs");
//Routes
app.get('/', (req, res) =>{
    res.render('index');
})


//Create an
/* app.get('/uploads', (req, res) =>{

}) */



// Listen and start up server
const PORT = 5000|| process.env.PORT;
app.listen(PORT, ()=> console.log(`Hey Im using ${PORT}`))