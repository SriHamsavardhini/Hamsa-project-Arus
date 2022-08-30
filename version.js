# Task by srikanth

product=[
    {version :'eclair',
    date:'30-04-2001',
    features:"Google Calendar, Google Maps, Google Sync, Google Search, Google Talk, Instant messaging, Media player",
    bugFixed:[{bugId:"v1s12001",bug:"security updates and performance improvements."}],
    author:"Ruby"},

{version :'gingerbread',
date:'10-06-2002',
features:"supports third-party virtual keyboard, auto-rotation option, ability to upload a video to YouTube, upload photos to Picasa.",
bugFixed:[{bugId:"v2s12001",bug:"Minor bug fixes, including SMS routing issues that affected the Nexus One"}],
author:"Hamsa"},

{version :'donut',
date:'06-04-2003',
features:"voice and text entry search, bookmark history, contacts, web, 'speak' a string of text",
bugFixed:[{bugId:"v3s12001",bug:"WVGA screen resolutions"}],
author:"Hamsa"},

{version :'honeycomb',
date:'18-08-2003',
features:"voice or video chat using Google Talk, network performance for Nexus S 4G, Gmail application, battery efficiency",
bugFixed:[{bugId:"v4s12001",bug:"check phone usage history"}],
author:"Mooshi"},

{version :'jellybean',
date:'22-12-2004',
features:" Microsoft Exchange email support, Bluetooth 2.1, ability to tap a Contact photo and select to call, SMS",
bugFixed:[{bugId:"v5s12001",bug:"framework behavioral changes,fixed a voice search bug"}],
author:"Steven"},

{version :'donut',
date:'22-2-2005',
features:" picture-in-picture support, support for Unicode 10.0 emoji (5.0), restructured settings, adoptive icons",
bugFixed:[{bugId:"v6s12001",bug:"autofill framework, automatic light, and dark themes"}],
author:"Steven"},


{version :'oreo',
date:'12-8-2005',
features:"Perceptive apps help us to control and navigate our phone using voice command.",
bugFixed:[{bugId:"v7s12001",bug:"  biometric authentication, the WPA3 Wi-Fi security"}],
author:"Hamsa"}

]
// for(i=0;i<product.length;i++){
//     console.log(product[i]);
// }

arrayOfId=[]
for(k =0;k<product.length;k++){
    arrayOfId.push(product[k].bugFixed[0].bugId)
}
//console.log(arrayOfId);

function byId(id){
    if(arrayOfId.includes(id)){
        for (i=0;i<product.length;i++){
            if(id==product[i].bugFixed[0].bugId){
                a=product[i]
            }
        }
    }
    return a
}
//console.log(byId('v5s12001'));


authorArray=[]
for(i=0;i<product.length;i++){
    authorArray.push(product[i].author)
}
console.log(authorArray);
let unique=[...new Set(authorArray)]
console.log(unique);

function byAuthor(auth){
    if(unique.includes(auth)){
        for (i=0;i<product.length;i++){
            if(auth==product[i].author){
                b=product[i]
            }
        }
    }
    
    return b
}
console.log(byAuthor('Siri'));

