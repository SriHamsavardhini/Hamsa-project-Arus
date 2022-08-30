#ROund Robin in javascript


tournament ={totalTeams:["CSK", "RCB", "MI", "RR", "DD"],startDate:'2022-08-29'} 


count = 0
for (i of tournament.totalTeams) {
    for (d = tournament.totalTeams.indexOf(i) + 1; d < tournament.totalTeams.length; d++) {
        count++
    }
}
console.log("Number of Matches :", count)
var totalRounds = tournament.totalTeams.length - 1;

supportValue = "dummy"
if (tournament.totalTeams.length % 2 != 0) {
    tournament.totalTeams.push(supportValue)
}

teams = []
if (tournament.totalTeams.includes("dummy")) {
    totalRounds += 1
}
else {
    totalRounds = totalRounds
}
for (i = 0; i < totalRounds; i++) {

    for (var j = 0; j < tournament.totalTeams.length / 2; j++) {
        if (tournament.totalTeams[j] != supportValue & tournament.totalTeams[tournament.totalTeams.length - 1 - j] != supportValue) {
            teams.push(tournament.totalTeams[j] + " vs " + tournament.totalTeams[tournament.totalTeams.length - 1 - j]);
        }

    }
    tournament.totalTeams.splice(1, 0, tournament.totalTeams.pop());
}
//console.log(teams)
if (teams.length % 2 != 0) {
    teams.push("None")
}
// Date Function 
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var d = new Date(tournament.startDate)
var date1 = new Date()
var date2 = new Date()
dateList = []
for (let i = 0; i <= 6; i++) {
    if (d.getDay() + i == 6) {
        date1.setDate(d.getDate() + i + 1)
        //console.log(date1);
        date2.setDate(d.getDate() +i )
       // console.log(date2);
    }
}
dayArray=[]
var dt = new Date(date1);
var dt2 = new Date(date2)
for (e = 0; e <= 4; e++) {
    dateList.push((new Date(dt2)).toString().substring(4, 15))
    dateList.push((new Date(dt)).toString().substring(4, 15))
    dayArray.push(days[dt2.getDay(date2)])
    dayArray.push(days[dt.getDay(date1)])
    dt.setDate(dt.getDate() + 7)
    dt2.setDate(dt2.getDate() + 7)
}

// console.log(dateList)
//console.log(dayArray)
count = 0
finalSlot = []
for (i = 0; i < teams.length; i = i + 2) {
    firstSlot = {}
    d = i
    firstSlot["Date"] = dateList[count]
    firstSlot["Day"]=dayArray[count]

    firstSlot["Slot_no"]=1
    firstSlot["Match_No"] = i + 1
    firstSlot["Morning_Batch"] = teams[i]
    firstSlot["ID"]="MAT22"+(i)+(teams[i].slice(0,3))
    if (teams[d + 1] != "None") {
        secondSlot={}
        secondSlot["Date"] = dateList[count]
        secondSlot["Day"]=dayArray[count]
        secondSlot["Slot_No"]=2
        secondSlot["match_No"] = i + 2
        secondSlot["Evening_Batch"] = teams[d + 1]
        secondSlot["ID"]="MAT22"+(i+1)+(teams[d+1].slice(0,3))
    }
    count++
    finalSlot.push(firstSlot)
    finalSlot.push(secondSlot)
}
console.log(finalSlot)


arrayOfId = finalSlot.filter(m => m.ID.includes('MAT227RR '))

console.log(arrayOfId)
