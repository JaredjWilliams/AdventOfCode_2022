import { Console } from 'console';
import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync('input.txt', 'utf8');
const data: string[] = rawData.split('\r\n');

console.log(data.length)

var chart = data.splice(0, 9)
var newChart: string[][] = []


var directions = data.splice(1, data.length)

var newDirections: string[][] = []

directions.forEach(dir => {
    newDirections.push(dir.replace('move', '|').replace('from', '|').replace('to', '|').replaceAll(' ', '').split('|')) 
})

chart.forEach(cha => {
    newChart.push(cha.split('|'))
})

console.log(newDirections)



for (let i = 0; i < newDirections.length; i++) {
    var length = parseInt(newDirections[i][1])
    console.log('length: ' + length)
    var from = parseInt(newDirections[i][2]) - 1
    console.log('from: ' + from)
    var to = parseInt(newDirections[i][3]) - 1
    console.log('to: ' + to)
    for (let j = 0; j < length; j++) {
        var element = newChart[from].pop()!
        console.log('Current element: ' + element)
        newChart[to].push(element)
       
    }
}
console.log(newChart)
