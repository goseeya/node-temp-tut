// const path = require('path')


// console.log(path.sep);

// const filePath = path.join('/content', 'subfolder', 'test.txt')
// console.log(filePath);

// const base = path.basename(filePath)
// console.log(base);

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// console.log(absolute);

const {readFile, writeFile} = require('fs');
console.log('start');
readFile('./content/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err);
        return 
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err);
            return 
        }
        const second = result
        writeFile('./content/result-async.txt', `Here is the resul: ${first}, ${second}`, (err, result)=>{
            if(err){
                console.log(err);
                return
            }
            // return result
            console.log('done with this task');
        })
    })
})
console.log('starting next');