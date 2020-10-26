let process = require('process') 
let request = process.argv[2] 

if (request === 'script') {
    let fs = require('fs');
let beeMovie = fs.readFileSync('data.txt', 'utf-8'); 
console.log(beeMovie);
} 