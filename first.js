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