import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync('input.txt', 'utf8');
const data: string[] = rawData.split('\r\n');

console.log(data[0].split(','))

var totalValue = 0
data.forEach(item => {
   var splitItem = item.split(',')
   console.log(splitItem)
   var itemOne = splitItem[0].split('-')

   var itemTwo = splitItem[1].split('-')
   console.log('Comparing: ' + parseInt(itemOne[0]) + ' & ' + parseInt(itemTwo[1]) + ' and ' + parseInt(itemOne[1]) + ' & ' + parseInt(itemTwo[0]))
   if (parseInt(itemOne[0]) >= parseInt(itemTwo[0]) && parseInt(itemOne[0]) <= parseInt(itemTwo[1])) {
    console.log('passed if statement 1')
    totalValue += 1
    console.log(totalValue)
   } else if (parseInt(itemOne[1]) >= parseInt(itemTwo[0]) && parseInt(itemOne[1]) <= parseInt(itemTwo[1])) {
    console.log('passed if statement 2')
    totalValue += 1
    console.log(totalValue)
   } else if (parseInt(itemTwo[0]) >= parseInt(itemOne[0]) && parseInt(itemTwo[0]) <= parseInt(itemOne[1])) {
      console.log('passed if statement 3')
      totalValue += 1
      console.log(totalValue)
   } else if (parseInt(itemTwo[1]) >= parseInt(itemOne[0]) && parseInt(itemTwo[1]) <= parseInt(itemOne[1])) {
      console.log('passed if statement 4')
      totalValue += 1
      console.log(totalValue)
   } else {
      console.log('failed')
   }
})

console.log(totalValue)