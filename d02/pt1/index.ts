import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data: string[] = rawData.split('\r\n');

var totalPoints = 0

for (let round of data) {
    console.log('Testing: ' + round)
    if (round.includes('A Y') || round.includes('B Z') || round.includes('C X')) {
        totalPoints += 6
        console.log('current total: ' + totalPoints)
    } else if (round.includes('A X') || round.includes('B Y') || round.includes('C Z')) {
        totalPoints += 3
        console.log('current total: ' + totalPoints)
    } 
}

for (let round of data) {
    var splitRound = round.split(' ')
    if (splitRound[1].includes('X')) {
        totalPoints += 1
    } else if (splitRound[1].includes('Y')) {
        totalPoints += 2
    } else if (splitRound[1].includes('Z')) {
        totalPoints += 3
    }
}

console.log('total points: ' + totalPoints)


/*
*The goal of day two was to find the total score of a game of rock, paper, scissors. Each element
 had different value and winning, tieing, and losing, had different values. 

 1. I used a for loop to isolate the specific round. I chose a generic for loop without an index value because I didnt need
    any specific control over the iteration count. Inially I used the variable name item, but
    changed it because it was vague. 
 2. I used the first for loop to find the total amound that resulted from winning, tieing. 
    I didnt incluse losing because its value is 0 which wouldnt change the final value.
 3. I chose to keep the elements in the rounds together because there were only 3 instances where
    a tie or a win would result.
 4. The next for loop was used to isolate each specific round. The splitRound[1] isolated the
    element. The for loop increased totalPoints depending on the elements value.
 5. I chose to split them up for readability sake.
*/