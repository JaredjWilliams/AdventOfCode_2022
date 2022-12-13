import { Console } from 'console';
import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync('input.txt', 'utf8');
const data: string[] = rawData.split('\r\n');

console.log(data.length)

var chart = data.splice(0, 9) //#1
var newChart: string[][] = []
var directions = data.splice(1, data.length) //#2
var newDirections: string[][] = []

directions.forEach(dir => {
    newDirections.push(dir.replace('move', '|').replace('from', '|').replace('to', '|').replaceAll(' ', '').split('|')) //#3
})

chart.forEach(char => {
    newChart.push(char.split('|')) //#4
})

console.log(newDirections)



for (let i = 0; i < newDirections.length; i++) { //#5
    var length = parseInt(newDirections[i][1])
    var from = parseInt(newDirections[i][2]) - 1
    var to = parseInt(newDirections[i][3]) - 1
    for (let j = 0; j < length; j++) { //#6
        var element = newChart[from].pop()!
        newChart[to].push(element)
       
    }
}
console.log(newChart)

/**
 * Goal: Move the boxes based on the directions.
 * 
 * 
 * 1 & 2. Split up the directions and the chart so I could have the chart to manipulate.
 * 3. Changed the input data and placed pipes in between each character so that each character could be split into its own string.
 
N|C|R|T|M|Z|P
D|N|T|S|B|Z
M|H|Q|R|F|C|T|G
G|R|Z
Z|N|R|H
F|H|S|W|P|Z|L|D
W|D|Z|R|C|G|M
S|J|F|L|H|W|Z|Q
S|Q|P|W|N

 * 4. Pushed each character into an array so they could be manipulated.
 * 5. I created variables that changed based on the iteration. I did this for readability.
 * 6. to move the variable i used the array method pop() because it removes and saves the last value of an array.
 * 
 */
