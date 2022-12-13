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
exports.File = void 0;
const fs = __importStar(require("fs"));
const inputFile = process.argv[2];
const rawData = fs.readFileSync('input.txt', 'utf8');
const data = rawData.split('\r\n');
class File {
    name;
    size;
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
}
exports.File = File;
class Directory {
    id;
    name;
    size;
    directories = [];
    files = [];
    constructor(id, name, size, directories, files) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.directories = directories;
        this.files = files;
    }
}
var mainRoot = [];
var currentDirectory;
var targetDirectory;
var directoryHx = [];
for (let i = 0; i < data.length; i++) {
    var command = data[i];
    if (command === '$ cd /') {
        executeMainRoot(i);
    }
    if (command.includes('cd') && command !== '$ cd ..' && !parseInt(command[0]) && command[0] !== 'd' && command !== '$ cd /') {
        var splitCommand = command.split(' ');
        var commandName = splitCommand[2];
        for (let j = currentDirectory.directories.length - 1; j >= 0; j--) {
            if (commandName === currentDirectory.directories[j].name) {
                targetDirectory = currentDirectory.directories[j];
            }
        }
        changeDirectory(currentDirectory);
    }
    if (command.includes('dir')) {
        createDirectory(command, i);
    }
    if (command === '$ cd ..') {
        changeBackDirectory();
    }
    if (parseInt(command[0])) {
        createFile();
    }
}
function createDirectory(command, id) {
    var splitCommand = command.split(' ');
    var name = splitCommand[1];
    currentDirectory.directories.push(new Directory(id, name, 0, [], []));
}
function changeDirectory(cDirectory) {
    for (let directory of cDirectory.directories) {
        if (directory.id === targetDirectory.id) {
            currentDirectory = targetDirectory;
            directoryHx.push(currentDirectory);
            break;
        }
        else {
            changeDirectory(directory);
        }
    }
    return currentDirectory;
}
function changeBackDirectory() {
    directoryHx.pop();
    currentDirectory = directoryHx[directoryHx.length - 1];
}
function executeMainRoot(id) {
    mainRoot.push(new Directory(id, '/', 0, [], []));
    currentDirectory = mainRoot[0];
    directoryHx.push(currentDirectory);
}
function createFile() {
    var splitCommand = command.split(' ');
    var fileName = splitCommand[1];
    var fileSize = parseInt(splitCommand[0]);
    currentDirectory.files.push(new File(fileName, fileSize));
    currentDirectory.size += fileSize;
}
var sizes = [];
function findSize(rDirectory) {
    var totalSize = rDirectory.size;
    for (let directory of rDirectory.directories) {
        totalSize = totalSize + findSize(directory);
    }
    sizes.push(totalSize);
    return totalSize;
}
findSize(mainRoot[0]);
var combinedValue = 0;
for (let size of sizes) {
    if (size <= 100000) {
        combinedValue += size;
    }
}
var freeSpace = 70000000 - sizes[sizes.length - 1];
var spaceNeeded = 30000000 - freeSpace;
console.log('Space needed: ' + spaceNeeded); //1609574
var deleteDirectory = sizes[sizes.length - 1];
for (let directorySize of sizes) {
    console.log('Seeing if: ' + directorySize + ' >= ' + spaceNeeded + ' && ' + directorySize + ' < ' + deleteDirectory);
    if (directorySize >= spaceNeeded && directorySize < deleteDirectory) {
        deleteDirectory = directorySize;
        console.log('Current lowest: ' + deleteDirectory);
    }
    else {
        console.log('Final lowest: ' + deleteDirectory);
    }
}
// function findDirectory(rDirectory: Directory) {
//     var cDirectoy;
//     for (let directory of rDirectory.directories) {
//         console.log('Comparing: ' + directory.size + ' vs ' + cDirectoy.size)
//         if (directory.size >= spaceNeeded && directory.size < cDirectoy.size) {
//             cDirectoy = directory
//             console.log('Current lowest: ' + cDirectoy)
//         } else {
//             findDirectory(directory)
//         }
//     }
// }
//# sourceMappingURL=index.js.map