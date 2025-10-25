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