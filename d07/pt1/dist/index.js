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
    // console.log('wokring with: ' + command)
    if (command === '$ cd /') {
        executeMainRoot(i);
    }
    if (command.includes('cd') && command !== '$ cd ..' && !parseInt(command[0]) && command[0] !== 'd' && command !== '$ cd /') {
        var splitCommand = command.split(' ');
        var commandName = splitCommand[2];
        // console.log('Command name: ' + commandName)
        for (let j = currentDirectory.directories.length - 1; j >= 0; j--) {
            // console.log('testing: ' + currentDirectory.directories[j].name + ' with ' + commandName)
            if (commandName === currentDirectory.directories[j].name) {
                targetDirectory = currentDirectory.directories[j];
                // console.log('target dir: ' + JSON.stringify(targetDirectory))
            }
        }
        changeDirectory(currentDirectory);
    }
    if (command.includes('dir')) {
        // console.log('Creating dir')
        createDirectory(command, i);
    }
    if (command === '$ cd ..') {
        // console.log('Moving back')
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
    // console.log(currentDirectory)
}
function changeDirectory(cDirectory) {
    for (let directory of cDirectory.directories) {
        // console.log('comparing: ' + JSON.stringify(directory.id) + ' vs ' + JSON.stringify(targetDirectory.id))
        // console.log('target dir: ' + JSON.stringify(targetDirectory))
        if (directory.id === targetDirectory.id) {
            // console.log('Passed: ' + JSON.stringify(directory.id) + ' vs ' + JSON.stringify(targetDirectory.id))
            currentDirectory = targetDirectory;
            directoryHx.push(currentDirectory);
            // console.log('Current directory changed to: ' + JSON.stringify(currentDirectory))
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
    console.log(rDirectory.name + ' has ' + totalSize);
    return totalSize;
}
findSize(mainRoot[0]);
var combinedValue = 0;
for (let size of sizes) {
    if (size <= 100000) {
        combinedValue += size;
    }
}
console.log('Combined value: ' + combinedValue);
console.log(mainRoot[0].directories);
/*
var directory: Directory[] = []
var dirSizes = []
var parentDirectoryID = 0


for (let i = 0; i < data.length; i++) {
    var command = data[i]
    console.log('Current command: ' + command)
    if (command === '$ cd /') {
        console.log('Executing main root')
        executeMainRoot(i)
    }
    if (command.includes('cd') && command !== '$ cd ..' && !parseInt(command[0]) && command[0] !== 'd') {
        console.log('Executing CD')
        console.log('Could be parent dir: ' + i)
        executeCD(command, i)
    }
    if (command.includes('dir')) {
        console.log('Executing Dir')
        addDirectory(command, i)
    }
    if (parseInt(command[0])) {
        console.log('Executing AddFile')
        addFile(command)
    }
}

for (let i = 0; i < directory.length; i++) {
    mySet.add(directory[i].parentDirectory)
}

for (let i = directory.length - 1; i > 0; i--) {
    console.log('Current Directory: ' + JSON.stringify(directory[i]))
    var targetIndex = directory.findIndex((dir: Directory) => dir.name === directory[i].parentDirectory)
    console.log('New Target Directory: ' + JSON.stringify(directory[targetIndex]))
    directory[targetIndex].size += directory[i].size
    console.log('Target directory changed: ' + JSON.stringify(directory[targetIndex]))
    console.log('  ')
}
var totalSize = 0
for (let i = 0; i < directory.length; i++) {
    var targetDirectory = directory[i];
    if(targetDirectory.size <= 100000) {
        totalSize += targetDirectory.size
        console.log('Directory: ' + JSON.stringify(targetDirectory))
        console.log('Total size: ' + totalSize)
    }
}

function FindSize(currentDirectory: Directory) {
    var total = currentDirectory.size
    for (let dir in currentDirectory.directories)
}



mySet.forEach((name) => {
    var directorySize = 0
    for (let i = 0; i < directory.length; i++) {
        if (name === directory[i].parentDirectory) {
            directorySize += directory[i].size
        }
    }
})


function executeMainRoot(index: number) {
    directory.push(new Directory(index, '/', 0, [], [], 0))
}

function addDirectory(command: string, index: number) {
    var splitCommand = command.split(' ')
    var name = splitCommand[1]
    directory.push(new Directory(index, name, 0, [], [], parentDirectoryID))
    console.log(directory)
}

function executeCD(command: string, index: number) {
    var splitCommand = command.split(' ')
    var name = splitCommand[2]
    console.log(name)
    
    var directoryIndex = directory.findIndex((d : Directory) => d.id === index)
    parentDirectory = index
    console.log('Parent Index: ' + parentDirectory)

}

function addFile(command: string) {
    var splitCommand = command.split(' ')
    var fileName = splitCommand[1]
    var fileSize = parseInt(splitCommand[0])
    directory[parentDirectory].size += fileSize
    directory[parentDirectory].files.push(new File(fileName, fileSize))
    console.log(directory[parentDirectory].files)

}




console.log(directory)
*/
//# sourceMappingURL=index.js.map