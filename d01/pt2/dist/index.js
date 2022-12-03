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
const data = rawData.split('\r\n\r\n');
var highestElf = 0;
var secondElf = 0;
var thirdElf = 0;
for (let elf of data) {
    var compareElf = 0;
    var splitElf = elf.split('\r\n');
    console.log('current elf: ' + splitElf);
    for (let food of splitElf) {
        var newFood = parseInt(food);
        console.log('current food: ' + newFood);
        compareElf += newFood;
        console.log('compare elf: ' + compareElf);
    }
    if (compareElf > highestElf) {
        thirdElf = secondElf;
        secondElf = highestElf;
        highestElf = compareElf;
        console.log('highest elf: ' + highestElf);
    }
    else if (compareElf < highestElf && compareElf > secondElf) {
        thirdElf = secondElf;
        secondElf = compareElf;
        console.log('second elf: ' + secondElf);
    }
    else if (compareElf < secondElf && compareElf > thirdElf) {
        thirdElf = compareElf;
        console.log('third elf: ' + thirdElf);
    }
}
var totalCalories = highestElf + secondElf + thirdElf;
console.log('The highest elf is: ' + highestElf);
console.log('The second highest is: ' + secondElf);
console.log('The third highest is: ' + thirdElf);
console.log('Total calories: ' + totalCalories);
//# sourceMappingURL=index.js.map