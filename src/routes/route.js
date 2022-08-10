const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    //logger.welcome()

    res.send('My second ever api!')
});


let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]

   router.post('/players', function (req, res) {

       //LOGIC WILL COME HERE
       let newPlayer = req.body
       let newPlayerName = newPlayer.name
       let isNameRepeated = false

       for(let i = 0; i < players.length; i++){
        if(players[i].name == newPlayerName){
            isNameRepeated = true;
            break
        }
       }

       if(isNameRepeated){
        res.send("This Player was already added!")
       } else{
        players.push(newPlayer)
        res.send(players)
       }

       res.send(  { data: players , status: true }  )
   });
   

router.get("/test-api", function(req,res){
    res.send({a:56 , b:45})  // JSON CODE IN OBJECT
});
router.post("/test-post", function(req,res){
    res.send([23, 45, 6])
});
 
// router.post("/test-post-1", function(req,res){
//     res.send(msg:"Hi", value:true)
// });
 

// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
//logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
router.get("/sol1", function (req, res) {
    let arr= [1,2,3,5,6,7]
  
    let total = 0;
    for (var i in arr) {
        total += arr[i]; // total = total + arr[i]  // 1+2+3+5+6+7 = 24
    }
  
    let lastDigit= arr.pop()
    let consecutiveSum= lastDigit * (lastDigit+1) / 2     // 7*(7+1)/2 = 28
    let missingNumber= consecutiveSum - total        //    28 - 24 = 4
  
    res.send(  { data: missingNumber  }  );  // missing number = 4
  });

  // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
  //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive   numbers.. n would be length+1 as 1 number is missing

  router.get("/sol2", function (req, res) {
    let arr= [33, 34, 35, 37, 38]
    let len= arr.length    // len = 5
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];  // total = total + arr[i]  // 33+34+35+37+38 = 177
    }
  
    let firstDigit= arr[0]  // 33
    let lastDigit= arr.pop()  // 38
    let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2  // (5+1)*(33+38)/2 = 6*71/2 = 426/2 = 213
    let missingNumber= consecutiveSum - total  // 213 - 177 = 36
   
    res.send(  { data: missingNumber  }  );  // missing number = 36
  });
  
 
 
 

router.get('/students', function (req, res) {
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function (req, res) {
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
    console.log("This is the request " + JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)

    res.send('Dummy response')
})

// problem 1  =======================================================================================
router.get('/movies', function (req, res) {
    let movies1 = ["Rang de Basanti", "The shining", "Lord of the rings", "Batman begins"]
    res.send(movies1)
})

// problem 2 ========================================================================================
router.get("/movies/:indexNumber", function (req, res) {

    const movies = ["Rang de Basanti", "The shining", "Lord of the rings", "Batman begins"]
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber;
    let requireMovie = movies[movieIndex]

    res.send(requireMovie)
})

// Problem 3  ========================================================================================
router.get("/moviess/:indexNumber", function (req, res) {

    const movies = ["Rang de Basanti", "The shining", "Lord of the rings", "Batman begins"]
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber;
    // check index
    if (movieIndex < 0 || movieIndex >= movies.length) {
        return res.send("The index value is not correct , Please check the it")
    }
    let requireMovie = movies[movieIndex]
    res.send(requireMovie)
})

// Problem 4  =========================================================================================
router.get("/films", function (req, res) {

    const films = [{ "id": 1, "name": "The Shining" },
    { "id": 2, "name": "Incendies" },
    { "id": 3, "name": "Rang de Basanti" },
    { "id": 4, "name": "Finding Nemo" }]
    res.send(films)
})

// Problem 5 ==========================================================================================
router.get("/films/:filmId", function (req, res) {

    const films = [{ "id": 1, "name": "The Shining" },
    { "id": 2, "name": "Incendies" },
    { "id": 3, "name": "Rang de Basanti" },
    { "id": 4, "name": "Finding Nemo" }]

    let filmId = req.params.filmId;
    for (let i = 0; i < films.length; i++) {
        let film = films[i]

        if (film.id == filmId) {

            return res.send(film)
        }
    }
    res.send("The film id doesn't match any movie")
})

module.exports = router;
                         // Git Hub Link : -      https://github.com/Awneesh86/plutonium.git