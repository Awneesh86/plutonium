const express = require('express');
const lodash = require('lodash');
const abc = require('../introduction/intro')
const router = express.Router();
const awn = require ('../logger/logger')
const second = require('../util/helper')
const bca = require('../validator/formatter')


router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    awn.welcome() // welcome function ko call kiya
    bca.lowercase()
    second.printDate() 
    second.printmonth()
    second.BatchInfo()
// problem 1
    let monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let result = lodash.chunk(monthName , 3)
    console.log(result)

    // problem 2
    let odd =[3,5,7,9,11,13,15,17,19,21]
     let result2=lodash.tail(odd , 9)
     console.log(result2)

     // problem 3
     let unione =[2,4,3,2,3]
     let result1 =lodash.union(unione)
     console.log(result1)

     // problem 4
     let array4=[['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
     const result4=lodash.fromPairs(array4)
     console.log(result4)

    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;