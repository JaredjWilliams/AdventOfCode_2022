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
    var rucksackOne = data[i]
    var rucksackTwo = data[i+1]
    var rucksackThree = data[i+2]
    var access = true;
    for (let char of rucksackOne) {
        if(rucksackTwo.includes(char) && rucksackThree.includes(char)) {
            for (let j = 0; j < compareArray.length; j++) {
                if(compareArray[j].includes(char) && access === true) {
                    var newIndex = j + 1;
                    totalValue += newIndex;
                    access = false
                }
            }
        }
    }
}

console.log(totalValue)


/**
 * Goal: Find the duplicate value in 3 rucksacks.
 * 
 * 1. Same code. Only difference is I used a more precise for loop that allowed me to iterate by 3.
 *    And I created variables to house rucksacks 1, 2, and 3, so they could be compared later on.
 */