"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const inputFile = process.argv[2];
const rawData = fs.readFileSync(inputFile || 'input.txt', 'utf8');
const data = rawData.split('\r\n');
console.log(data);
var totalValue = 0;
const compareArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
    'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'];
for (let rucksack of data) {
    var compartmentOne = rucksack.substring(0, rucksack.length / 2);
    var compartmentTwo = rucksack.substring(rucksack.length / 2, rucksack.length);
    var access = true;
    for (let char of compartmentOne) {
        if (compartmentTwo.includes(char)) {
            console.log('found: ' + char);
            for (let i = 0; i < compareArray.length; i++) {
                console.log('comparing: ' + char + ' and ' + compareArray[i]);
                if (compareArray[i].includes(char) && access === true) {
                    var newIndex = i + 1;
                    totalValue += newIndex;
                    console.log('Total points: ' + totalValue);
                    access = false;
                }
            }
        }
    }
}
/**
 * Goal: To find the duplicate characters in each rucksack and add their point
 *      count together.
 *
 * 1. I created an array of the alphabet because I knew I could use the character index
 *      as its value.
 * 2. I used a generic for loop to iterate through the data because i didnt need any
 *      specific control at this point.
 * 2.
 */ 
//# sourceMappingURL=index.js.map