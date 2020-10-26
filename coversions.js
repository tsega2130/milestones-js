let num= [1,2,3,4]
console.log(typeof num)
let string1= num.toString();
console.log(string1)

console.log(' ')

//https://stackabuse.com/javascript-convert-string-to-number/

let string2="1234"
console.log(string2)
let num2= parseInt(string2)
console.log(num2)

//https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/
let string= "Syntax Sucks"
console.log(string)
let alphabetSoup= [...string]
console.log(alphabetSoup)
//When i try to specify the sperator like let alphabetSoup= string.split('-'). it doesnt work 

let headass= ["To be", "--or--", "not to be"]
console.log(headass)
console.log(headass[0]+headass[1]+headass[2]);


console.log(headass.join())

