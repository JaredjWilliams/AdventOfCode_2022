import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'input.txt', 'utf8');
const data: string[] = rawData.split('\r\n');

var totalValue = 0;
const compareArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                     'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
                    'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
                    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
                    'Y', 'Z']

console.log(data.length)

for (let i = 0; i < data.length; i += 3) {
    var substringOne = data[i]
    var substringTwo = data[i+1]
    var substringThree = data[i+2]
    var access = true;
    console.log(i)
    for (let char of substringOne) {
        console.log('comparing ' + char + ' to ' + substringTwo + ' and ' + substringThree)
        if(substringTwo.includes(char) && substringThree.includes(char)) {
            console.log('found: ' + char)
            for (let j = 0; j < compareArray.length; j++) {
                if(compareArray[j].includes(char) && access === true) {
                    var newIndex = j + 1;
                    totalValue += newIndex;
                    access = false
                    console.log('adding ' + char + ' value of ' + newIndex + '. The new value is ' + totalValue)
                }
            }
        }
    }
}

console.log(totalValue)