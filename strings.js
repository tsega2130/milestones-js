str1= "I'm seriously considering "
str2= "commiting eco-terrorism"

console.log(`The value of str1 is: ${str1}`);
console.log(`The value of str2 is: ${str2}`);

console.log(`The concatenation(?) of str1 and str2 is: ${str1 + str2}`);
/* documentation on string. ? replaces the bloolean values with desired strings 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes */
console.log(`The string "${str2}" ${str1.includes(str2) ? 'is' : 'is not'} in str1`);
//Another way of writing it
console.log(`Is "${str2}" within str1? My code determined that that was: ${str1.includes(str2)}`); 
console.log(' '); 


waffles="Whats up with Jesse and Waffles"
console.log(`The # of characters in waffles is: ${waffles.length}`)
console.log(`I saidddd ${waffles.toLocaleUpperCase()}`)
console.log((`My b, should't have yelled. But really ${waffles.toLocaleLowerCase()}`))
console.log(`The first character is ${waffles.charAt(0)}`)
console.log(`The second character is ${waffles.charAt(1)}`)
//why is it 30 and not 31? The length of characters returned is 31 and there is no space after so it shouldnt include that and this isn't a case of it starting at index 0
console.log(`The last character is ${waffles.charAt(30)}`)
//hmm
//console.log(`The last character is ${waffles.charAt(waffles.length)}`)

k=6
console.log(`The character at postion ${k} is ${waffles.charAt(k)}`) 

waffles= waffles + " a" 
console.log(waffles);

stringLiterals= "string literals"
console.log(`What about if you've been using ${stringLiterals} this entire time?`)
