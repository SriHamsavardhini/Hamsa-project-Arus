#Version problem after changes


interface productInterface {
    version: string,
    date: any,
    features: any[],
    bugId: any,
    author: any,
    versionType: type
}
interface bugArrayInterface {
    bugNo: number,
    bugId: string,
    bugFixed: string
}
enum type {
    Major,
    Enhancement,
    Patch
}

let product: productInterface[] = [
    {
        version: 'eclair',
        date: '30-04-2001',
        features: ["Google Calendar", "Google Maps", "Google Sync", "Google Search", "Google Talk", "Instant messaging", "Media player"],
        bugId: "v1s12001",
        author: "Ruby",
        versionType: type.Patch
    },

    {
        version: 'gingerbread',
        date: '10-06-2002',
        features: ["supports third-party virtual keyboard", "auto-rotation option", "ability to upload a video to YouTube", "upload photos to Picasa"],
        bugId: "v2s12001",
        author: "Hamsa",
        versionType: type.Enhancement
    },

    {
        version: 'donut',
        date: '06-04-2003',
        features: ["voice and text entry search", "bookmark history", "contacts", " web", "'speak' a string of text"],
        bugId: "v3s12001",
        author: "Hamsa",
        versionType: type.Major
    },

    {
        version: 'honeycomb',
        date: '18-08-2003',
        features: ["voice or video chat using Google Talk", "network performance for Nexus S 4G", " Gmail application", "battery efficiency"],
        bugId: "v4s12001",
        author: "Mooshi",
        versionType: type.Major
    },

    {
        version: 'jellybean',
        date: '22-12-2004',
        features: [" Microsoft Exchange email support", " Bluetooth 2.1", "ability to tap a Contact photo and select to call", "SMS"],
        bugId: "v5s12001",
        author: "Steven",
        versionType: type.Patch
    },

    {
        version: 'donut',
        date: '22-02-2005',
        features: [" picture-in-picture support", "support for Unicode 10.0 emoji (5.0)", "restructured settings", "adoptive icons"],
        bugId: "v6s12001",
        author: "Steven",
        versionType: type.Enhancement
    },


    {
        version: 'oreo',
        date: '12-08-2005',
        features: ["Perceptive apps help us to control and navigate our phone using voice command"],
        bugId: "v7s12001",
        author: "Hamsa",
        versionType: type.Major
    }

]
console.log(product);
console.log("--------------------------------------------------------------------------------------------------");
console.log("\n");



let bugArray: bugArrayInterface[] =
    [
        {
            bugNo: 1,
            bugId: 'v1s12001',
            bugFixed: "security updates and performance improvements"
        },

        {
            bugNo: 2,
            bugId: 'v2s12001',
            bugFixed: "Minor bug fixes, including SMS routing issues that affected the Nexus One"
        },
        {
            bugNo: 3, bugId: 'v3s12001',
            bugFixed: "WVGA screen resolutions"
        },
        {
            bugNo: 4, bugId: 'v4s12001',
            bugFixed: "check phone usage history"
        },
        {
            bugNo: 5, bugId: 'v5s12001',
            bugFixed: "framework behavioral changes"
        },
        {
            bugNo: 6, bugId: 'v6s12001',
            bugFixed: "fixed a voice search bug"
        },
        {
            bugNo: 7, bugId: 'v7s12001',
            bugFixed: "biometric authentication, the WPA3 Wi-Fi security"
        }]

console.log("bugs with description", bugArray);
console.log("---------------------------------------------------------------------------------------------");

let arrayOfId: any[] = []
for (let productIndex = 0; productIndex < product.length; productIndex++) {
    arrayOfId.push(product[productIndex].bugId)
}
console.log("list of bug id's", arrayOfId);
console.log("---------------------------------------------------------------------------------------------");


function findById(id: string) {
    let b: any = []
    if (arrayOfId.includes(id)) {
        for (let index = 0; index < product.length; index++) {
            for (let element in bugArray) {
                if (id == product[index].bugId) {
                    if (product[index].bugId == bugArray[element].bugId) {
                        a = bugArray[element].bugFixed
                        b.push(product[index].version)
                    }
                }
            }

        }
        console.log(`The version is ${b}  =>  The description of  ${id} is:`)
    }
    return a
}

console.log(findById('v6s12001'));
console.log("---------------------------------------------------------------------------------------------");

let obj: any = {}
for (let index = 0; index < product.length; index++) {
    var a = product[index].author
    let auth = product.filter(n => n.author.includes(a))

    if (!(a in obj)) {
        obj[a] = auth.length
    }
}
//console.log(obj);

let arr: number[] = []
let ob2: any = {}
for (let i in obj) {
    arr.push(obj[i])
}
function findSorting(a: number, b: number) {
    return a - b
}
for (let j in arr) {
    for (let k in obj) {
        if (j == obj[k]) {
            ob2[k] = obj[k]
        }
    }
}
arr.sort(findSorting)
//console.log(ob2)
var value = Object.values(ob2)

for (let i in ob2) {
    if (ob2[i] == value.length - 1) {
        console.log(`${i} has major  contribution,contributed  on ${ob2[i]} versions`);
    }
}
console.log("---------------------------------------------------------------------------------------------");



function findByName(str: string) {
    a=product.filter(n=>n.author === str)
    arr=a.length
    return arr
} console.log("The specified author version is:");

console.log(findByName("Hamsa"))
console.log("products are",a)


function findByDate(releaseDate: string) {
    for (let index in product) {
        if (product[index].date == releaseDate) {
            console.log("The product released on" + releaseDate + ", " + product[index])
        }
    }
}
findByDate('22-2-2005')
console.log("---------------------------------------------------------------------------------------------");

let year: string[] = []
function totalVersion(str: string) {
    for (let ele in product) {
        if (product[ele].date.slice(6, 10) == str) {
            year.push(product[ele].version)
        }
    }
    console.log("The total products realsed in year", str + " is: " + year.length)
    console.log(year);
}
totalVersion('2005')
console.log("---------------------------------------------------------------------------------------------");


let vertype: string[] = []
function totalTypes(str: type): number {
    for (let index in product) {
        if (product[index].versionType == str) {
            vertype.push(product[index].version)
        }
        var a: any = vertype.length
    }
    return a
}
var total = totalTypes(type.Patch)
console.log(type[total])
console.log("The total products realsed in",type[total] + " is: " + vertype.length)

console.log("---------------------------------------------------------------------------------------------");


function findByFeature(str: string) {
    for (let element in product) {
        a = product[element].features
        for (let index = 0; index < a.length; index++) {
            if (str == a[index]) {
                console.log("The product you are searching by features is:", product[element].version)
            }
        }
    }
}
findByFeature('support for Unicode 10.0 emoji (5.0)')
console.log("---------------------------------------------------------------------------------------------");
