import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'input.txt', 'utf8');
const data: string[] = rawData.split('\r\n');


console.log(data)
var totalValue = 0;
const compareArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                     'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
                    'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
                    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
                    'Y', 'Z']

for (let item of data) {
    var substringOne = item.substring(0, item.length / 2)
    var substringTwo = item.substring(item.length / 2, item.length)
    var access = true
    for (let char of substringOne) {
        console.log('comparing ' + char + ' to ' + substringTwo)
        if(substringTwo.includes(char)) {
            console.log('found')
            for (let i = 0; i < compareArray.length; i++) {
                if(compareArray[i].includes(char) && access === true) {
                    var newIndex = i + 1;
                    totalValue += newIndex
                    access = false
                    console.log('adding ' + char + ' value of ' + newIndex + '. The new value is ' + totalValue)
                }
            }
        }
    }
}