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

let digit = 7
for(i = 2;i < digit;i++){
    if(i%digit == 0){
        console.log(`${digit} is a prime number`)
    }else{
        console.log(`${digit} is not a prime number`)

    }
}