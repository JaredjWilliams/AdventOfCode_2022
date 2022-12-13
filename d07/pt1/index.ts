import { dir } from 'console';
import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync('input.txt', 'utf8');
const data: string[] = rawData.split('\r\n');


export class File {
    name: string;
    size: number;

    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }
}

class Directory {
    id: number;
    name: string;
    size: number;
    directories: Directory[] = []
    files: File[] = [];

    constructor(id: number, name: string, size: number, directories: Directory[], files: File[]) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.directories = directories;
        this.files = files;
    }
}

var mainRoot: Directory[] = []
var currentDirectory!: Directory;
var targetDirectory: Directory;
var directoryHx: Directory[] = []

for (let i = 0; i < data.length; i++) {
    var command = data[i]
    if (command === '$ cd /') {
        executeMainRoot(i)
    }
    if (command.includes('cd') && command !== '$ cd ..' && !parseInt(command[0]) && command[0] !== 'd' && command !== '$ cd /') {
        var splitCommand = command.split(' ')
        var commandName = splitCommand[2]
        for (let j = currentDirectory.directories.length - 1; j >= 0; j--) {
            if (commandName === currentDirectory.directories[j].name) {
                targetDirectory = currentDirectory.directories[j]
            }
        }
        changeDirectory(currentDirectory)
    }
    if (command.includes('dir')) {
        createDirectory(command, i)
    }
    if (command === '$ cd ..') {
        changeBackDirectory()
    }
    if (parseInt(command[0])) {
        createFile()
    }


}

function createDirectory(command: string, id: number) {
    var splitCommand = command.split(' ')
    var name = splitCommand[1]
    currentDirectory.directories.push(new Directory(id, name, 0, [], []))
}

function changeDirectory(cDirectory: Directory) {
     for (let directory of cDirectory.directories) {
        if (directory.id === targetDirectory.id) {
            currentDirectory = targetDirectory
            directoryHx.push(currentDirectory)
            break
        } else {
            changeDirectory(directory)
        }
     }
     return currentDirectory
}

function changeBackDirectory() {
    directoryHx.pop()
    currentDirectory = directoryHx[directoryHx.length - 1]
}

function executeMainRoot(id: number) {
    mainRoot.push(new Directory(id, '/', 0, [], []))
    currentDirectory = mainRoot[0]
    directoryHx.push(currentDirectory)
}

function createFile() {
    var splitCommand = command.split(' ')
    var fileName = splitCommand[1]
    var fileSize = parseInt(splitCommand[0])
    currentDirectory.files.push(new File(fileName, fileSize))
    currentDirectory.size += fileSize
}


var sizes: number[] = []
function findSize(rDirectory: Directory) {
    var totalSize = rDirectory.size
    for (let directory of rDirectory.directories) {
        totalSize = totalSize + findSize(directory)
    }
    sizes.push(totalSize)
    console.log(rDirectory.name + ' has ' + totalSize)
    return totalSize
}
findSize(mainRoot[0])

var combinedValue = 0
for (let size of sizes) {
    if (size <= 100000) {
        combinedValue += size
    }
}
console.log('Combined value: ' + combinedValue)
console.log(mainRoot[0].directories)
