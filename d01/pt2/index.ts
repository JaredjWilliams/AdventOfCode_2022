import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'input.txt', 'utf8');
const data: string[] = rawData.split('\r\n\r\n');



var highestElf = 0
var secondElf = 0
var thirdElf = 0

for (let elf of data) {

  var compareElf = 0
  var splitElf = elf.split('\r\n')
  for (let food of splitElf) {
    var newFood = parseInt(food)
    compareElf += newFood
  }
  if (compareElf > highestElf) {
    thirdElf = secondElf
    secondElf = highestElf
    highestElf = compareElf
  } else if (compareElf < highestElf && compareElf > secondElf) {
    thirdElf = secondElf
    secondElf = compareElf
  } else if (compareElf < secondElf && compareElf > thirdElf) {
    thirdElf = compareElf
  }
}

var totalCalories = highestElf + secondElf + thirdElf


/*
  *The goal of day 1 part 2 was to find the 3 highest values.

  1. I created three variables to store the values.
  2. I ran the data through two for loops to isolate the particular food. Compare elf
      was used the same as part 1.
  3. The if statment if structured in such a way that a succeeded if statement
      would preserve the values of the other variables. For instance if the compareElf was
      higher than the highestElf the highestElf variable would change, but it would need to be
      preserved because it was still higher than the secondElf.
*/