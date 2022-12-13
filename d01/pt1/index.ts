import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync(inputFile || 'input.txt', 'utf8');
const data: string[] = rawData.split('\r\n\r\n');



var highestElf = 0
console.log(data)

for (let elf of data) {
  var compareElf = 0
  var splitElf = elf.split('\r\n')
  for(let food of splitElf) {
    var newFood = parseInt(food)
    compareElf += newFood
  }
  if (compareElf > highestElf) {
    highestElf = compareElf
  }
}


console.log(highestElf)

  /*
1. [
  '4850\r\n' +
  '1688\r\n' +
  '4382\r\n' +
  '1991\r\n' +
  '2297\r\n' +
] data was split this way because i split by \r\n\r\n. I know now i should have just plit by \r\n.


  2. used a for loop because each iteration needed to be split \r\n.
  3. split by \r\n because at this point i didnt understand what \r\n meant.
  4. used another for loop on the insdie because i had to access the individual food.
  5. parse the string to an integer because it was a string.
  6. compared highestElf to compareElf. I did this because i needed highestElf to take on the value
    compareElf if compare elf was higher.
  */