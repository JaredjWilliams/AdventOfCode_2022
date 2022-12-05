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
var totalValue = 0;
const compareArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
    'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'];
console.log(data.length);
for (let i = 0; i < data.length; i += 3) {
    var substringOne = data[i];
    var substringTwo = data[i + 1];
    var substringThree = data[i + 2];
    var access = true;
    console.log(i);
    for (let char of substringOne) {
        console.log('comparing ' + char + ' to ' + substringTwo + ' and ' + substringThree);
        if (substringTwo.includes(char) && substringThree.includes(char)) {
            console.log('found: ' + char);
            for (let j = 0; j < compareArray.length; j++) {
                if (compareArray[j].includes(char) && access === true) {
                    var newIndex = j + 1;
                    totalValue += newIndex;
                    access = false;
                    console.log('adding ' + char + ' value of ' + newIndex + '. The new value is ' + totalValue);
                }
            }
        }
    }
}
console.log(totalValue);
//# sourceMappingURL=index.js.map