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
const rawData = fs.readFileSync('input.txt', 'utf8');
const data = rawData.split('\r\n');
console.log(data[0].split(','));
var totalValue = 0;
data.forEach(item => {
    var splitItem = item.split(',');
    console.log(splitItem);
    var itemOne = splitItem[0].split('-');
    var itemTwo = splitItem[1].split('-');
    console.log('Comparing: ' + parseInt(itemOne[0]) + ' & ' + parseInt(itemTwo[1]) + ' and ' + parseInt(itemOne[1]) + ' & ' + parseInt(itemTwo[0]));
    if (parseInt(itemOne[0]) >= parseInt(itemTwo[0]) && parseInt(itemOne[0]) <= parseInt(itemTwo[1])) {
        console.log('passed if statement 1');
        totalValue += 1;
        console.log(totalValue);
    }
    else if (parseInt(itemOne[1]) >= parseInt(itemTwo[0]) && parseInt(itemOne[1]) <= parseInt(itemTwo[1])) {
        console.log('passed if statement 2');
        totalValue += 1;
        console.log(totalValue);
    }
    else if (parseInt(itemTwo[0]) >= parseInt(itemOne[0]) && parseInt(itemTwo[0]) <= parseInt(itemOne[1])) {
        console.log('passed if statement 3');
        totalValue += 1;
        console.log(totalValue);
    }
    else if (parseInt(itemTwo[1]) >= parseInt(itemOne[0]) && parseInt(itemTwo[1]) <= parseInt(itemOne[1])) {
        console.log('passed if statement 4');
        totalValue += 1;
        console.log(totalValue);
    }
    else {
        console.log('failed');
    }
});
console.log(totalValue);
//# sourceMappingURL=index.js.map