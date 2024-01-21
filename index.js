/* Your Code Here */
function createEmployeeRecord(employeeRecord){
    let employee = {
        firstName: employeeRecord[0],
        familyName: employeeRecord[1],
        title: employeeRecord[2],
        payPerHour: employeeRecord[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(employeeRecords){
    let employee = []
    return employee = employeeRecords.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    let timeIn = {
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    }
    this.timeInEvents.push(timeIn)
    return this
}

function createTimeOutEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    let timeOut = {
        type: 'TimeOut',
        hour: parseInt(hour),
        date: date
    }
    this.timeOutEvents.push(timeOut)
    return this
}

function hoursWorkedOnDate(date){
    let hoursWorked = 0;
    let timeInData = this.timeInEvents.find(element => element.date === date)
    let timeOutData = this.timeOutEvents.find(element => element.date === date)
    if(timeInData && timeOutData){
        hoursWorked = (timeOutData.hour - timeInData.hour)/100
    }
    return hoursWorked
}

function wagesEarnedOnDate(date){
    let hoursWorked = hoursWorkedOnDate.call(this, date)
    let wagesEarned = 0
    let timeInEvent = this.timeInEvents.find(element => element.date === date)
    if(timeInEvent){
        wagesEarned = this.payPerHour * hoursWorked
    }
    return wagesEarned
}

function findEmployeeByFirstName(srcArray, firstName){
    let foundEmployee = srcArray.find(element => element.firstName === firstName)
    return foundEmployee
}

function calculatePayroll(employeeRecordsArray){
    let totalWagesForAll = 0
    employeeRecordsArray.forEach(employee => {
        let totalWagesForEmployee =  allWagesFor.call(employee)
        totalWagesForAll = totalWagesForAll + totalWagesForEmployee
    })
    return totalWagesForAll
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}