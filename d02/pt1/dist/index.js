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
const rawData = fs.readFileSync(inputFile || 'inputTest.txt', 'utf8');
const data = rawData.split('\r\n');
var totalPoints = 0;
for (let item of data) {
    console.log('Testing: ' + item);
    if (item.includes('A Y') || item.includes('B Z') || item.includes('C X')) {
        totalPoints += 6;
        console.log('current total: ' + totalPoints);
    }
    else if (item.includes('A X') || item.includes('B Y') || item.includes('C Z')) {
        totalPoints += 3;
        console.log('current total: ' + totalPoints);
    }
}
for (let item of data) {
    var splitItem = item.split(' ');
    if (splitItem[1].includes('X')) {
        totalPoints += 1;
    }
    else if (splitItem[1].includes('Y')) {
        totalPoints += 2;
    }
    else if (splitItem[1].includes('Z')) {
        totalPoints += 3;
    }
}
console.log('total points: ' + totalPoints);
//# sourceMappingURL=index.js.map