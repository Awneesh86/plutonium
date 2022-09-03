
let axios = require("axios")

//============================================================= Question-1 =====================================================
/* WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
          Using this Link : --       https://apisetu.gov.in/api/cowin/cowin-public-v2 */

let getDistrictSessions = async function (req, res) {
    try {
        let district = req.query.district_Id
        let date = req.query.date
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
            
        }
        let result = await axios(options);
        console.log(result.data)
        // let data = result.data
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


//============================================== Question-2 ======================================================================

let getSortedCities = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray = []
        for (i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=c5a07a5f1ba8b10f0e5cb28b018f097a`)
            // console.log(resp.data.main.temp)
            obj.temp = resp.data.main.temp // {city: "Bengaluru", temp: 301.2}
            cityObjArray.push(obj)
        }
        let sorted = cityObjArray.sort(function (a, b) { return a.temp - b.temp })
        console.log(sorted)
        res.status(200).send({ status: true, data: sorted })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ status: false, msg: "server error" })
    }
}

//================================================= Question-3 ====================================================//

let memeHandler = async function (req, res) {
    try {
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=181913649&text0=Awneesh Kumar&text1=FunctionUp&username=chewie12345&password=meme@123`
        }
        let result = await axios(options)
        res.send({ data: result.data })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({ status: false, msg: "server error" })
    }
}






let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getStates = async function (req, res) {
    
    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }
        
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



module.exports.getDistrictSessions = getDistrictSessions

module.exports.getSortedCities = getSortedCities

module.exports.memeHandler = memeHandler


module.exports.getByPin = getByPin

module.exports.getOtp = getOtp

module.exports.getStates = getStates