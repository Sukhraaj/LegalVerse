let str = "hello"
let str2 = "world"
let string = str + str2
console.log(string)

let str3 = "hello world"
let str4 = ''

for(let i = 0; i < str3.length; i++){
    if(str3[i] !== " "){
        str4 += str3[i]
    }
}
console.log(str4)


let a = 'bookbook'
let b = ''

for(let i = 0; i < a.length; i++){
    if(!b.includes(a[i])){
        b += a[i]
    }
}
console.log(b)



let n = 5
let fact = 1
for(let i = n; i > 0; i--){
    fact = fact * i
}
console.log(fact)


let num = 5
let factorial = 1

while(num>0){
    factorial = factorial * num
    num-- 
}
console.log(factorial)


let number = 567234
let rev = 0 
let rem = 0

for(;number > 0;){
    rem = number%10
    rev = rev * 10 + rem
    number = Math.floor(number/10)
}
console.log(rev)




let digit = 9
let isPrime = true
for(i = 2;i < digit;i++){
    if(digit%i == 0){
        isPrime = false
        break
    }
}

if(isPrime == true){
    console.log(`${digit} is a prime number`)
}
else{
    console.log(`${digit} is not a prime number`)
}



async function loadData(){
    try{
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        console.log(data.products.map( p => p.title))
    }
    catch(error){
        console.error(error)
    }
    finally{
        console.log("Runs Successfully")
    }
}

loadData()

console.log("yo guys")
console.log("How are you")
console.log("What do you do for living")
console.log("What are you doing right now")
console.log("What are your future plans")
console.log("What is your ambition in life")
console.log("What is your goal")
console.log("What is your dream job")
