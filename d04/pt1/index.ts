import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync('input.txt', 'utf8');
const data: string[] = rawData.split('\r\n');


var totalValue = 0
data.forEach(assignments => {
   var splitAssignments = assignments.split(',') //#1
   console.log(splitAssignments)
   var assignmentOne = splitAssignments[0].split('-')

   var assignmentTwo = splitAssignments[1].split('-')
   if (parseInt(assignmentOne[0]) <= parseInt(assignmentTwo[0]) && parseInt(assignmentOne[1]) >= parseInt(assignmentTwo[1])) { //#2
      totalValue += 1
      console.log(totalValue)
   } else if (parseInt(assignmentOne[0]) >= parseInt(assignmentTwo[0]) && parseInt(assignmentOne[1]) <= parseInt(assignmentTwo[1])) {
      totalValue += 1
      console.log(totalValue)
   }
})

console.log(totalValue)

/**
 * Goal: Find how many groups where one assignments values encapsulate another.
 * 
 * 1. Split assignments into [ '27-55', '28-48' ] to access each assignment idividually
 * 2. created an if statement that checked if the first encapsulated the second. And then checked if
 *    the second encapsulated the first.
 * 
 * 
 */