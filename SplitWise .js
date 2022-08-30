# Three bill Problem in js



bill = [
    bill1 = { A: 3000, B: 200, C: 100 },
    bill2 = { X: 1500, B: 10, D: 0, Y: 1300 },
    bill3 = { A: 3000, B: 100, C: 200 },
    bill4={X:1250,Y:500}
]
console.log("******************SPLITWISE*****************");


finalBill = {}
function add(objects) {//function to find the sum amount in each bill
    sum = 0
    for (i in objects) {
        sum = sum + objects[i]
    } return sum
}
function objLen(obj) {//function to find the length of the bill
    arr = []
    for (i in obj) {
        arr.push(obj[i])
        len = arr.length
    } return len
}
function toSort(ob) {//function to sort the values
    sortedArr = []
    for (i in ob) {
        sortedArr.push([i, ob[i]])
    }
    sortedArr.sort((a, b) => a[1] - b[1])
    objectAfterSorting = {}
    for (j of sortedArr) {
        objectAfterSorting[j[0]] = j[1]
    }
    return objectAfterSorting
}

function toReverseSort(ob) {
    sortArray = []
    for (i in ob) {
        sortArray.push([i, ob[i]])
    }
    sortArray.sort((a, b) => b[1] - a[1])
    reverseSortObject = {}
    for (j of sortArray) {
        reverseSortObject[j[0]] = j[1]
    }
    return reverseSortObject
}

function removeZero(obj) {//function to remove zero from get and paid objects
    nonZero = {}
    for (i in obj) {
        if (nonZero[i] != 0) {
            nonZero[i] = obj[i]
        }
    }
    return nonZero
}

function calculationOfBill(bill) {//final calculation of total bill
    sum1= add(bill)
    length = objLen(bill)
    average = sum1 / length
    amtToBePaid = {}
    for (value in bill) {
        amtToBePaid[value] = ((bill[value]) - average)
    }
    return amtToBePaid
}

for (i in bill) {
    settle = calculationOfBill(bill[i])
    for (j in settle) {
        if (!(j in finalBill)) {
            finalBill[j] = settle[j]
        }
        else {
            finalBill[j] = finalBill[j] + settle[j]
        }
    }
}
//finding of amount for individual person
finalBill = toSort(finalBill)
amtToPay = {}
amtToGet = {}
for (pay in finalBill) {
    if (finalBill[pay] < 0) {
        amtToPay[pay] = finalBill[pay]
    }
    else {
        amtToGet[pay] = finalBill[pay]
    }
}
amtToGet = toReverseSort(amtToGet)  //because the greater value comes first
console.log("Person to be get from others",amtToGet);
console.log("Person should  paid to others",amtToPay);
console.log("*******************************************************************************");
for (get in amtToGet) {
    for (give in amtToPay) {
        if((amtToGet[get]!=0)&&(amtToPay[give]!=0)){
            if (amtToGet[get] > Math.abs(amtToPay[give])) {            //credit >debit
                value = (amtToGet[get] - Math.abs(amtToPay[give]))
                amount = Math.abs(amtToPay[give])
                amtToGet[get] = value
                amtToPay[give] = 0
                amtToGet = removeZero(amtToGet)
                amtToPay = removeZero(amtToPay)
                console.log(`${give} has to pay Rs. ${amount} to ${get}`)
            }
            else if (amtToGet[get] < Math.abs(amtToPay[give])) {         //debit>credit
                amount = amtToGet[get]
                value = (Math.abs(amtToPay[give]) - Math.abs(amtToGet[get]))
                amtToGet[get] = 0
                amtToPay[give] = value
                amtToGet = removeZero(amtToGet)
                amtToPay = removeZero(amtToPay)
                console.log(`${give} has to pay  Rs.${amount} to ${get}`)
            }
            else if (Math.abs(amtToGet[get]) == Math.abs(amtToPay[give])) {      //credit==debit
                amount = amtToGet[get]
                amtToGet[get] = 0
                amtToPay[give] = 0
                amtToGet = removeZero(amtToGet)
                amtToPay = removeZero(amtToPay)
                console.log(`${give} has to pay Rs.${amount} to ${get}`)
            }
        }
    }
}
