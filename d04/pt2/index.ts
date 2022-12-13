import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync('input.txt', 'utf8');
const data: string[] = rawData.split('\r\n');

console.log(data[0].split(','))

var totalValue = 0
data.forEach(assignments => {
   var splitAssignments = assignments.split(',')
   console.log(splitAssignments)
   var assignmentOne = splitAssignments[0].split('-')

   var assignmentTwo = splitAssignments[1].split('-')
   console.log('Comparing: ' + parseInt(assignmentOne[0]) + ' & ' + parseInt(assignmentTwo[1]) + ' and ' + parseInt(assignmentOne[1]) + ' & ' + parseInt(assignmentTwo[0]))
   if (parseInt(assignmentOne[0]) >= parseInt(assignmentTwo[0]) && parseInt(assignmentOne[0]) <= parseInt(assignmentTwo[1])) {
    console.log('passed if statement 1')
    totalValue += 1
    console.log(totalValue)
   } else if (parseInt(assignmentOne[1]) >= parseInt(assignmentTwo[0]) && parseInt(assignmentOne[1]) <= parseInt(assignmentTwo[1])) {
    console.log('passed if statement 2')
    totalValue += 1
    console.log(totalValue)
   } else if (parseInt(assignmentTwo[0]) >= parseInt(assignmentOne[0]) && parseInt(assignmentTwo[0]) <= parseInt(assignmentOne[1])) {
      console.log('passed if statement 3')
      totalValue += 1
      console.log(totalValue)
   } else if (parseInt(assignmentTwo[1]) >= parseInt(assignmentOne[0]) && parseInt(assignmentTwo[1]) <= parseInt(assignmentOne[1])) {
      console.log('passed if statement 4')
      totalValue += 1
      console.log(totalValue)
   } else {
      console.log('failed')
   }
})

console.log(totalValue)

/**
 * Goal: Find how many times there is any overlap of assignments.
 * 
 * 1. The code is the same as pt1 but the if statements are different.
 *    They check to see if the first and second assigement numbers fall inside the range of the second assignment.
 *    If they do it passes and total value is incremented by 1. 
 */