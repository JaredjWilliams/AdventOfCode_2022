import * as fs from 'fs';

const inputFile = process.argv[2];
const data: string = fs.readFileSync('input.txt', 'utf8');


console.log(data)


for(let i = 0; i < data.length - 1; i++) {
    var readString = new Set(data.slice(i, i+4)) 
    console.log(readString.size)
    if(readString.size === 4) {
        console.log('success ' + (i + 4) )
        break
    }
}
