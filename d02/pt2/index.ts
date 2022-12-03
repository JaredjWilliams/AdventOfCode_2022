import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data: string[] = rawData.split('\r\n');

console.log(data)


var totalPoints = 0

for (let item of data) {
    console.log('Testing: ' + item)
    if (item.includes('Z')) {
        totalPoints += 6
        console.log('current total: ' + totalPoints)
    } else if (item.includes('Y')) {
        totalPoints += 3
        console.log('current total: ' + totalPoints)
    } 
}

for (let item of data) {
    console.log('Testing: ' + item)
    if (item.includes('A Z') || item.includes('B Y') || item.includes('C X')) {
        totalPoints += 2
        console.log('current total: ' + totalPoints)
    } else if (item.includes('C Z') || item.includes('A Y') || item.includes('B X')) {
        totalPoints += 1
        console.log('current total: ' + totalPoints)
    } else if (item.includes('B Z') || item.includes('C Y') || item.includes('A X')) {
        totalPoints += 3
        console.log('current total: ' + totalPoints)
    }
}

console.log('total points: ' + totalPoints)
