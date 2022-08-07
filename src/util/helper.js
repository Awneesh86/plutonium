function printDate(){
    let date = new Date()
    console.log("Today date is ",date.getDate()) 
}
function printmonth(){
    let month = new Date()
    console.log("Month is ",month.getMonth()+1)
}
function BatchInfo(){
    console.log("Plutonium , W3D5, the topic for today Nodejs Module System") 
}
module.exports.printDate = printDate
module.exports.printmonth= printmonth
module.exports.BatchInfo= BatchInfo



