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
var chart = data.splice(0, 9);
console.log(chart);
var newChart = [];
var directions = data.splice(1, data.length);
var newDirections = [];
directions.forEach(dir => {
    newDirections.push(dir.replace('move', '|').replace('from', '|').replace('to', '|').replaceAll(' ', '').split('|'));
});
chart.forEach(cha => {
    newChart.push(cha.split('|'));
});
for (let i = 0; i < newDirections.length - 1; i++) {
    var length = parseInt(newDirections[i][1]);
    console.log('length: ' + length);
    var from = parseInt(newDirections[i][2]) - 1;
    console.log('from: ' + from);
    var to = parseInt(newDirections[i][3]) - 1;
    console.log('to: ' + to);
    var origin = newChart[from];
    if (length !== undefined) {
        var element = origin.slice(origin.length - length, origin.length);
        console.log('Current element: ' + element);
        element.forEach(ele => {
            newChart[to].push(ele);
        });
        for (let j = 0; j < length; j++) {
            newChart[from].pop();
        }
    }
}
console.log(newChart);
//# sourceMappingURL=index.js.map