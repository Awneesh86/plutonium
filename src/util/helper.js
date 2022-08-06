function printDate(){
    let date = new Date()
    console.log(date.getDate()) 
    printmonth()
}
function printmonth(){
    let month = new Date()
    console.log(month.getMonth()+1)
    BatchInfo() 
}
function BatchInfo(){
    console.log("My naem is Awneesh Kumar") 
}
module.exports.printDate = printDate



