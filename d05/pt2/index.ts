import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync('input.txt', 'utf8');
const data: string[] = rawData.split('\r\n');



var chart = data.splice(0, 9)
console.log(chart)
var newChart: string[][] = []
var directions = data.splice(1, data.length)
var newDirections: string[][] = []

directions.forEach(dir => {
    newDirections.push(dir.replace('move', '|').replace('from', '|').replace('to', '|').replaceAll(' ', '').split('|')) 
})

chart.forEach(cha => {
    newChart.push(cha.split('|'))
})

for (let i = 0; i < newDirections.length - 1; i++) {
    var length = parseInt(newDirections[i][1])
    console.log('length: ' + length)
    var from = parseInt(newDirections[i][2]) - 1
    console.log('from: ' + from)
    var to = parseInt(newDirections[i][3]) - 1
    console.log('to: ' + to)
    var origin = newChart[from]
    if(length !== undefined) {
        var element = origin.slice(origin.length - length, origin.length)!
        console.log('Current element: ' + element)
        element.forEach(ele => {
            newChart[to].push(ele)
        })
        for (let j = 0; j < length; j++) {
        
            newChart[from].pop()
    
        }
    }
}

console.log(newChart)
