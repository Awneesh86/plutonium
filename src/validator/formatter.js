function lowercase(){
    let name1 = "AWNEESH KUMAR"
    let fullName1 = name1.toLowerCase();
    console.log(fullName1)
    uppercase()
}

function uppercase(){
    let name2= "awneesh kumar"
    let fullName2 = name2.toUpperCase();
    console.log(fullName2)
    trim()
}

function trim(){
    let name="awneesh kumar"
    let fullName=name.trim();
    console.log(fullName)
}
module.exports.lowercase=lowercase
