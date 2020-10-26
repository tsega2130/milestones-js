num1=2315
num2=3249

if (num1%2===0 && num2%2===0) {
    console.log("Both are even")
} else if (num1%2===0 || num2%2===0) {
    console.log("One is even")
} else if (num1%2!=0 && num2%2!=0) {
    console.log("Neither are even")
}