coolArray=[1,2,3,4,5]
console.log(`The length of the array is ${coolArray.length}`)
console.log(`The 1st element in the array is ${coolArray[1]}`)
console.log(`The 2nd element in the array is ${coolArray[2]}`)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//here it makes sense why its -1 cause of the index. still confused about with strings tho 
console.log(`The last element of the array is ${coolArray[coolArray.length-1]}`)

k=3
console.log(`The element at position ${k} of the array is ${coolArray[k]}`)

console.log(' ')
console.log('Changing the elements')

console.log(coolArray)

coolArray[0]="one"
console.log(`The 1st element in the array is now ${coolArray[0]}`)
console.log(coolArray)

coolArray[1]="two"
console.log(`The 2nd element in the array is now ${coolArray[1]}`)
console.log(coolArray)

coolArray[coolArray.length-1]="five"
console.log(`The last element of the array is now ${coolArray[coolArray.length-1]}`)
console.log(coolArray)

k=3
k--
console.log(k)
console.log(`The element at position ${k} of the array is now ${coolArray[k]}`)
console.log(coolArray)


console.log(' ')
console.log('Adding/Removing the elements')

coolArray.push(6)
console.log(`The last element in the array is now different!`)
console.log(coolArray)

coolArray.pop(6)
console.log(`Nevermind its back to normal`)
console.log(coolArray)

//https://stackoverflow.com/questions/8073673/how-can-i-add-new-array-elements-at-the-beginning-of-an-array-in-javascript
coolArray.unshift(0)
console.log("I forgot 0 is a number")
console.log(coolArray)

coolArray.shift(0)
console.log("It gets enough attention")
console.log(coolArray)
