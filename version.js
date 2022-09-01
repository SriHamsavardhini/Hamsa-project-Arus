# Task by srikanth


product=[
    {version :'eclair',
    date:'30-04-2001',
    features:["Google Calendar", "Google Maps","Google Sync", "Google Search", "Google Talk", "Instant messaging", "Media player"],
    bugId:"v1s12001",
    author:"Ruby",
    versionType:"patch"},

{version :'gingerbread',
date:'10-06-2002',
features:["supports third-party virtual keyboard", "auto-rotation option", "ability to upload a video to YouTube", "upload photos to Picasa"],
bugId:"v2s12001",
author:"Hamsa",
versionType:"patch"},

{version :'donut',
date:'06-04-2003',
features:["voice and text entry search", "bookmark history", "contacts"," web", "'speak' a string of text"],
bugId:"v3s12001",
author:"Hamsa",
versionType:"Major"},

{version :'honeycomb',
date:'18-08-2003',
features:["voice or video chat using Google Talk", "network performance for Nexus S 4G"," Gmail application", "battery efficiency"],
bugId:"v4s12001",
author:"Mooshi",
versionType:"Major"},

{version :'jellybean',
date:'22-12-2004',
features:[" Microsoft Exchange email support"," Bluetooth 2.1", "ability to tap a Contact photo and select to call", "SMS"],
bugId:"v5s12001",
author:"Steven",
versionType:"Major"},

{version :'donut',
date:'22-02-2005',
features:[" picture-in-picture support", "support for Unicode 10.0 emoji (5.0)", "restructured settings", "adoptive icons"],
bugId:"v6s12001",
author:"Steven",
versionType:"Enhancement"},


{version :'oreo',
date:'12-08-2005',
features:["Perceptive apps help us to control and navigate our phone using voice command"],
bugId:"v7s12001",
author:"Hamsa",
versionType:"patch"}

]
console.log(product);
console.log("--------------------------------------------------------------------------------------------------");
console.log("\n");

arrayOfBug=[{bugNo:1,
bugId:'v1s12001',
bugFixed:"security updates and performance improvements."},
{bugNo:2,
bugId:'v2s12001',
bugFixed:"Minor bug fixes, including SMS routing issues that affected the Nexus One"},
{bugNo:3,bugId:'v3s12001',
bugFixed:"WVGA screen resolutions"},
{bugNo:4,bugId:'v4s12001',
bugFixed:"check phone usage history"},
{bugNo:5,bugId:'v5s12001',
bugFixed:"framework behavioral changes"},
{bugNo:6,bugId:'v6s12001',
bugFixed:"fixed a voice search bug"},
{bugNo:7,bugId:'v7s12001',
bugFixed:"biometric authentication, the WPA3 Wi-Fi security"}]

console.log("bugs with description",arrayOfBug);
console.log("---------------------------------------------------------------------------------------------");

arrayOfId=[]
for(k =0;k<product.length;k++){
    arrayOfId.push(product[k].bugId)
}
console.log("list of bug id's",arrayOfId);
console.log("---------------------------------------------------------------------------------------------");


function byId(id){
    if(arrayOfId.includes(id)){
        for (i=0;i<product.length;i++){
            for(j in arrayOfBug){
                if(id==product[i].bugId){
                    if(product[i].bugId==arrayOfBug[j].bugId){
                        a=arrayOfBug[j].bugFixed
                        b=product[i].version
                    }
                }
            }
            
        }
    console.log(`The version is ${b}  =>  The description of  ${id} is:`)
    }
    return a
}

console.log(byId('v6s12001'));
console.log("---------------------------------------------------------------------------------------------");

obj={}
for(i=0;i<product.length;i++){
    a=product[i].author
    auth=product.filter(n => n.author.includes(a))

    if(!(a in obj)){
        obj[a]=auth.length
    }
}
//console.log(obj);

arr=[]
ob2={}
for(i in obj){
    arr.push(obj[i])
}
function sorting(a,b){
    return a-b
}
for(j in arr){
    for(k in obj){
        if(j==obj[k]){
            ob2[k]=obj[k]
        }
    } 
}
arr.sort(sorting)
//console.log(ob2)
k=Object.values(ob2)

for(i in ob2){
    if(ob2[i]==k.length-1){
        console.log(`${i} has major  contribution,contributed  on ${ob2[i]} versions`);
    }
}
console.log("---------------------------------------------------------------------------------------------");


auth=[]
function findByAuthorName(str){
    for(i in product){
        if(product[i].author==str){
            auth.push(product[i].version)
        }
    }console.log("The specified author version is:",auth);
}
findByAuthorName("Hamsa")



function byDate(releaseDate){
    for(i in product){
        if(product[i].date==releaseDate){
            console.log("The product released on"+ releaseDate+", "+product[i])
        }
    }
}
byDate('22-2-2005')
console.log("---------------------------------------------------------------------------------------------");

year=[]
function totalVersionInYear(str){
    for(i in product){
        if(product[i].date.slice(6,10)==str){
            year.push(product[i].version)
        }
    }
    console.log("The total products realsed in year" , str + " is: " +year.length)
    console.log(year);
}
totalVersionInYear('2005')
console.log("---------------------------------------------------------------------------------------------");


type=[]
function totalType(str){
    for(i in product){
        if(product[i].versionType==str){
            type.push(product[i].version)
        }
    }
    console.log("The total products realsed in type", str +" is: " +type.length)
    console.log(type);
}
totalType('patch')
console.log("---------------------------------------------------------------------------------------------");


function byFeatur(str){
    for(i in product){
        a=product[i].features
        for(j=0;j<a.length;j++){
            if(str==a[j]){
                console.log("The product you are searching by features is:",product[i].version)
            }
        }
    }
}
byFeatur('support for Unicode 10.0 emoji (5.0)')
console.log("---------------------------------------------------------------------------------------------");

