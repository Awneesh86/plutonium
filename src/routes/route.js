const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

// problem 1  =======================================================================================
router.get('/get-movies',function(req, res){ 
    let movies1= ["Holiday ","Tiranga","Diljale","Kahani"]
    res.send(movies1)
})

// problem 2 ========================================================================================
router.get('/get-movie/:indexNumber',function(req, res){
    
    let movies = ['Naseeb','Mohra','Bhagambhag','Shole']
    let index = req.params.indexNumber;
    console.log(movies[index])
     res.send(movies[index])
})

// Problem 3  ========================================================================================
router.get('/get-moviess/:indexNumber',function(req, res){
    
    let moviesName = ['Naseeb','Mohra','Bhagambhag','Shole']
    let index = req.params.indexNumber;

     if(index > moviesName.length){
        return res.send(" use a valid index ")
     }else{
    
     res.send(moviesName[index])
     }
})

// Problem 4  =========================================================================================
router.get('/get-/films',function(req, res){

    let moviesName=[ {"id": 1,"name": "The Shining"}, 
                     {"id": 2,"name": "Incendies"}, 
                     {"id": 3,"name": "Rang de Basanti"},
                     {"id": 4,"name": "Finding Nemo"}]
    res.send(moviesName)
})

// Problem 5 ==========================================================================================
router.get('/get-/films/:indexNumber',function(req, res){  

    let moviesName=[ {"id": 1,"name": "The Shining"}, 
                     {"id": 2,"name": "Incendies"}, 
                     {"id": 3,"name": "Rang de Basanti"},
                     {"id": 4,"name": "Finding Nemo"}]
    let index = req.params.indexNumber;
     if(index > moviesName.length){
        return res.send("no movie exist with this id ")
     }else{
     res.send(moviesName[index])
     }
})

module.exports = router;
