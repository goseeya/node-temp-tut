// const path = require('path')


// console.log(path.sep);

// const filePath = path.join('/content', 'subfolder', 'test.txt')
// console.log(filePath);

// const base = path.basename(filePath)
// console.log(base);

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// console.log(absolute);

const {readFileSync, writeFileSync} = require('fs');
// const fs = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first,second);

writeFileSync('./content/results-sync.txt', `Here is the resul: ${first}, ${second}`, {flag: 'a'})
 console.log('done with this task');
 console.log('starting the next one');