import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'input.txt', 'utf8');
const data: string[] = rawData.split('\r\n\r\n');

var highestElf = 0

for (let elf of data) {

  var compareElf = 0
  var splitElf = elf.split('\r\n')
  for (let food of splitElf) {
    var newFood = parseInt(food)
    compareElf += newFood
  }
  if (compareElf > highestElf) {
    highestElf = compareElf
  }
}
