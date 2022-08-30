//a=Math.floor(2.99999)
//b=Math.ceil(2.001)
// c=Math.round(2.59999)
// d=Math.min(1,2,3,4)
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// r=Math.random()
// console.log(Math.round(r*10))

//4 digit otp generation
// r=Math.round(Math.random()*10)
// r1=Math.round(Math.random()*10)
// r2=Math.round(Math.random()*10)
// r3=Math.round(Math.random()*10)
// console.log(r+" "+r1+" "+r2+" "+r3)

// const a=23
// a=35
// console.log(a)

// var b=12
// var b=12
// let b=12
// const b=12
//  a=12
// if(b%2==0){
//   console.log(b+"Is a even number")
// }
// else{
//      console.log(b+"Is a odd number")
// }

// console.log(4=="4")
// console.log(4==="4")
// console.log(4!="4")
// console.log(3>='1')

//  console.log(27-'23')
//  console.log(27+'23')

// a=1234
// d1=num%10
// d2=Math.floor(a/10)%10
// d3=Math.floor(a/100)%1
// d4=Math.floor(a/1000)
// console.log(d4**(0.5)+" "+d3**3+" "+d2**(0.5)+" "+d1**3)

// function sum(){
//     a=23
//     b=25
//     console.log(a+b)
// }
// sum()

//  function uttalakadi(a,b){
//    r1=Math.floor(a/10)
//    r2=a%10
//    r3=Math.floor(b/10)
//    r4=b%10
//    r5=r1*1000+r3*100+r2*10+r4+8
//    return r5
//  }
//  num1=24
//  num2=36
//  a=`This is the output required ${uttalakadi(num1,num2)}`
//  console.log(a)

// const add=(a,b)=>(a*2+b*54)

// function sum(a,b){
//     return (a*2+b*54)
// }

// console.log(add(23,90))    


// arr1=[1,2,3,4,5]
// arr2=[1,2,'hello',4,'true']
// console.log(arr1[0],arr1[1],arr1[4])

// arr1=[1,2,3,4,5]
// arr1.push(23,24,35,16)
// // console.log(arr1)
// // console.log(`This is the index of 23:- ${arr1.indexOf(23)}`)
// // console.log(arr1.slice(0,5))
// console.log(arr1[arr1.length-1])












//  let r="javascript"
//  for (f of r){                    // f in r gives the no as output
//      console.log(f)
//  }

// let a=9
// for (let i=0;i<=a;i++){
//     console.log(i)
// }


// i=2
// j=2
// a=i++
// b=++j
// c=i--
// d=--j
// e=i++ + ++i
// f=i++ - ++i + i*i - --i
// console.log(a,"a")
// console.log(b,"b")
// console.log(c,"c")
// console.log(d,"d")
// console.log(i,"i")
// console.log(j,"j")
// console.log(e,"e")
// console.log(f,"f")






// a=5
// if(a>1){
//     fact=1
//     for (let i=1;i<=a;i++){
//         fact=fact*i
//     }
//     console.log("factorial is",fact)  
// }
// else{
//     console.log("the factorial is 1")
// }





//  arr=[]
//  b=[]
//  n=6
//  for(let i=0;i<=n;i++){
//      str="a"
//     no=5
//     if(str.length==1){
//         if(str!="a" || str!="e" || str!="i" || str!="o" || str!="u"){
//             arr.push(no)
//             b.push(str)
//         }
//     }
//  }console.log(arr,"this is no array")
//  console.log(b,"this is string array")







//task - palindrome check
// a=3939
// d4=a%10
// d3=Math.floor(a/10)%10
// d2=Math.floor(a/100)%10
// d1=Math.floor(a/1000)%10
// //if(d1+""+d2 == d3+""+d4)
//if(d1==d3 && d2==d4){
//    console.log(a,"the no is palindrome")
// }
// else{
//     console.log(a,"the no is not a palindrome")
// }  



//console.log("1441"=="14"+"41")



// for(let i=0;i<=a.length;i++){
//     for(j of a){
//         if(a.indexOf(i)==j){
//             console.log("true")                  //wrong one
//         }
        
//         else{
//             console.log("false")
//         }    
//    }
//}

// a= "malayalam"
// b=[]
// for (let i=0;i<=a.length;i++){                            //wrong one
//     i=(a[a.length-1])
//     b.push(i)
// }
// if(b==a){
//     console.log("palindrome")
// }





// a="malayalam"
// for(let i=0;i<=a.length;i++){               //logic missing
//     if(a[i]==a[a.length-1-i]){
//         console.log("palindrome")
//     }
// }





// a=[]
// sum=0
// name="madam"
// for(let i=0;i<name.length;i++){
//     a.push(name[i])

// }
// for (k=0;k<a.length;k++){
//     if(a[k]==a[a.length-1-k]){
//         sum+=1
//     }
// }console.log(sum==a.length)




// a="malayalam"
// b=a.split("").reverse().join("")
// console.log(a==b)



// a="10  12  13 14 15".split(" ").map(Number)
// console.log(a)



// a="1221"
// b=""
// for(let i=a.length-1;i>=0;i--){
//     b+=a[i]
// }
// if(a==b){
//     console.log("it is palindrome")
// }
// else{
//     console.log("it is not  palindrome")
// }




// a=1221
// d=0
// sum=0
// while(a>0){                                                                  //reversing a no
//     d=a%10
//     sum=sum*10+d
//     a=Math.floor(a/10)
// }
// console.log(sum)










//Objects
// const myOb={ 
//     name:"hamsa",
//     training:"arus",
//     colour:"pink"
// }
// console.log(myOb['name'])
// console.log(myOb["nameTree"])
// console.log(myOb.name)




// const myOb={
//     name:"Javascript"
// }
// a=[]
// b=[]
// for(let i=0;i<=myOb.length;i++){
//     a.push(myOb.name(i))
// }
// sum=0
// for (let j=0;j<a.length;j++){

//     if(a[j]) == a[a.length-1-j]{
//         sum+=1
//         b.push(j)
//     }
//     else{
//         sum=1
//     }
// }
// console.log(b.split(""),sum)





// const ref=(word)=>{
//     const Ob={}
//         for(a of word){
//             if(a in Ob){
//                 Ob[a]+=1
//             }
//             else{
//                 Ob[a]=1
//             }
//         }
//         return Ob
    
// }
// console.log(ref("javascript"))




// const ref=(sentence)=>{
//     const Ob={}
//         for(a of sentence.split(" ")){
//             if(a in Ob){
//                (Ob[a])+=1
//             }
//             else{
//                 Ob[a]=1
//             }
//         }
//         return Ob
    
// }
// console.log(ref("javascript is difficult than python python is easy to learn"))




// const intro=(a,b)=>{
//     const expenditure={
//         name:a,
//         phone:b,
//         salary:10000,
//         spent:1000,
//         remaining:salary-spent
//     }
//     return expenditure
// }
// console.log(intro("hamsa","82200"))





// const intro=(a,b)=>{
//     const exp={
//         name:a,
//         phone:b,
//         salary:10000,
//         spent:1000,
//         remaining:function(){
//             //return this.salary-this.spent            best method
//             return exp.salary-exp.spent
//         }

//     }
//     return exp.remaining()
// }
// console.log(intro("hamsa","123465576"))





// const act_follow ={
//     abc:12000000,
//     abcd:23456710,
//     abcdef:123456,
//     total:function(){
//         return this.abc+this.abcd+this.abcdef
//     }
// }
// console.log(act_follow.total())





// const Ob={}
//     n=Number(prompt("enter the no of keys"))
//     for(let i=0;i<=n;i++){
//         k=prompt("enter the keys")
//         v=Number(prompt("enter the values")) 
//         if (!(k in Ob)){
//             if((v>=20)  && (v%2==0)){
//                 Ob[k]=v
//             }
//             else{
//                 alert("no only above 20")
//             }
//         }
//         else{
//             alert("already same key exist")
//             i--
//         }}
// console.log(Ob)

    
    















// a=345
// function sum(){
//     if (a>99 && a<1000){
//         td=a%10
//         d=Math.floor(a/10)
//         sd=d%10
//         fd=Math.floor(d/10)
//         sum=fd+td
//         function sub(){
//             return sum-sd
//         }
//     }
//     else{
//         console.log("enter 3 digit no")
//     }
//     console.log("the sum is ",sum)
//     console.log("the difference is", sub())
// }sum()







// const sum1 = (n) =>{
//     count=5
//     sum=0
//     diff=0
//     for ( i of String(n)){
//         if(count%2==0){
//             sum=sum+Number(i)
//         }
//         else{
//             diff=diff+Number(i)
//         }
//         count+=1
//     }
//     console.log(sum-diff)
// }

// n=234
// if(n>99 && n<1000){
//     sum1(String(n))
// }





// a= 1
// const Ob={
//     bill_1:function arr1(){
//         ar=[]
        
       
//     },
//     bill_2:function arr2(){
//         arr_2=[]
//         arr_2.push(300,400,100,200)
//     },
//     bill_3:function arr3(){
//         arr_3=[]
//         arr_3.push(3000,100,0,200)
//     }
// }
// console.log(Ob.bill_1())
       




arr=[{Ob_b1:{
    "a":1000,
    "b":2000,
    "c":1000
}}]


sum=arr[0].Ob_b1.a+arr[0].Ob_b1.b+arr[0].Ob_b1.c
console.log(sum,"total amount in rupees")
average=sum/3   //total amount
console.log(average,"average amount in bill_1 is")   //average amount

arr1=[
a1=arr[0].Ob_b1.a-average,
b1=arr[0].Ob_b1.b-average,
c1=arr[0].Ob_b1.c-average]
console.log(a1)
console.log(b1)
console.log(c1)
function positive(){
    positive=[]
    negative=[]

}

//amount to be paid for each person
//max=Math.max(a1,b1,c1)
//min=Math.min(a1,b1,c1)
if(a1 >=b1  && a1>=c1) {
    largest = a1
    console.log("a is largest")
    console.log("amount paid to person a is:",Math.abs(b1+c1))
}
else if (b1>=a1  && b1 >= c1) {
    largest = b1
    console.log("b is largest")
    console.log("amount paid to person b is:",Math.abs(a1+c1))
}
else {
    largest = c1
    console.log("c is largest")
    console.log("amount paid to person c is:",Math.abs(a1+b1))
}
//


















































































