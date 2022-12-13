import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'input.txt', 'utf8');
const data: string[] = rawData.split('\r\n');


console.log(data)
var totalValue = 0;
const compareArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                     'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',   //#1
                    'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
                    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
                    'Y', 'Z']

for (let rucksack of data) {   //#2
    var compartmentOne = rucksack.substring(0, rucksack.length / 2)
    var compartmentTwo = rucksack.substring(rucksack.length / 2, rucksack.length)
    var access = true  //#3
    for (let char of compartmentOne) {
        if(compartmentTwo.includes(char)) {  //#4
            for (let i = 0; i < compareArray.length; i++) {
                if(compareArray[i].includes(char) && access === true) { //#5
                    var newIndex = i + 1;
                    totalValue += newIndex
                    access = false
                }
            }
        }
    }
}

/**
 * Goal: To find the duplicate characters in each rucksack and add their point
 *      count together.
 * 
 * 1. I created an array of the alphabet because I knew I could use the character index
 *      as its value.
 * 2. I used a generic for loop to iterate through the data because i didnt need any
 *      specific control at this point.
 * 3. I added a boolean variable that would allow access to an if statement. I did this because
 *      my code searched for duplicates, meaning it would find two instances, but I only wanted
 *      one instance inside the if statement. If i let two in it would double my total. I could 
 *      have just divided my total by 2 at the end.
 * 4.  used includes to find the duplicate character.
 * 5.  used access variable to only allow one instace through.
 */