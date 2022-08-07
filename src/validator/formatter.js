function lowercase(){
    let name1 = "FUNCTIONUP"
    let fullName1 = name1.toLowerCase();
    console.log(fullName1)
    uppercase()
}

function uppercase(){
    let name2= "functionup"
    let fullName2 = name2.toUpperCase();
    console.log(fullName2)
    trim()
}

function trim(){
    let name="    FunctionUp    "
    let fullName=name.trim();
    console.log(fullName)
}
module.exports.lowercase=lowercase
