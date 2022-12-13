import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data: string[] = rawData.split('\r\n');

console.log(data)


var totalPoints = 0

for (let round of data) {
    if (round.includes('Z')) {
        totalPoints += 6
    } else if (round.includes('Y')) {
        totalPoints += 3
    } 
}

for (let round of data) {
    if (round.includes('A Z') || round.includes('B Y') || round.includes('C X')) {
        totalPoints += 2
    } else if (round.includes('C Z') || round.includes('A Y') || round.includes('B X')) {
        totalPoints += 1
    } else if (round.includes('B Z') || round.includes('C Y') || round.includes('A X')) {
        totalPoints += 3
    }
}

console.log('total points: ' + totalPoints)

/*

1. I used the string method 'includes' because it iterates through the string to see if any of the
    match the argument. This cuts out the need to habe another for loop to iterate through each 
    character.
2. In the second loop i used an if statement to find all the possible ways an element could be used.
    For instance A, Z means the opponent chose rock and Z means you won. So paper is the element chosen.
    The same  is true for B, Y && C, X.
*/
