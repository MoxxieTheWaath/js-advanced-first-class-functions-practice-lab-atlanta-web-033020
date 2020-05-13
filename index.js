// Code your solution in this file!
function logDriverNames(drivers) {
    drivers.forEach( function (driver) {
        console.log(driver.name)
    })
}

function logDriversByHometown(drivers, location) {
    drivers.forEach( function (driver) {
        if (driver.hometown == location) {
            console.log(driver.name)
        }
    })
}

function driversByRevenue(drivers) {
    let newDrivers = drivers.slice(0)
    newDrivers.sort(function(a, b) {
        return a.revenue - b.revenue
    })
    return newDrivers
}

function driversByName(drivers) {
    let newDrivers = drivers.slice(0)
    newDrivers.sort(function (a, b) {
        return a.name.localeCompare(b.name) 
    })
    return newDrivers
}

function totalRevenue(drivers) {
    let newDrivers = drivers.slice(0)
    return newDrivers.reduce( function (a, b) {
        return a + b.revenue
    }, 0)
}

function averageRevenue(drivers) {
    let revenue = totalRevenue(drivers)
    let average = revenue / drivers.length
    return average
}