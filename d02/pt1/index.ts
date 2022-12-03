import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data: string[] = rawData.split('\r\n');

var totalPoints = 0

for (let item of data) {
    console.log('Testing: ' + item)
    if (item.includes('A Y') || item.includes('B Z') || item.includes('C X')) {
        totalPoints += 6
        console.log('current total: ' + totalPoints)
    } else if (item.includes('A X') || item.includes('B Y') || item.includes('C Z')) {
        totalPoints += 3
        console.log('current total: ' + totalPoints)
    } 
}

for (let item of data) {
    var splitItem = item.split(' ')
    if (splitItem[1].includes('X')) {
        totalPoints += 1
    } else if (splitItem[1].includes('Y')) {
        totalPoints += 2
    } else if (splitItem[1].includes('Z')) {
        totalPoints += 3
    }
}

console.log('total points: ' + totalPoints)