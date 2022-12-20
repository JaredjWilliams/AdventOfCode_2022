import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync('input.txt', 'utf8');
const forest: string[] = rawData.split('\r\n');



// console.log(forest)

function findVisibleTrees() {
    var visibleTrees = 0;
    var notVisibleTrees = 0;
    for (let i = 1; i < forest.length - 1; i++) {
        // console.log(forest[i])
        var currentLine = i
        // console.log('CurrentLine: ' + currentLine)
        for (let j = 1; j < forest[currentLine].length - 1; j++) {
            // console.log('finding tree: ' + forest[currentLine][j])
            var lineTree = j
            var currentTree = false
            // Compares Right
            if (currentTree === false) {
                for (let k = lineTree; k < forest[currentLine].length - 1; k++) {
                    // console.log('entering k loop')
                    var indexTree = forest[currentLine][lineTree]
                    var compareTree = forest[currentLine][k+1]
                    if (indexTree > compareTree) {
                        // console.log(indexTree + ' passed ' + 'it is greater than ' + compareTree)
                        currentTree = true
                    } else {
                        // console.log(indexTree + ' failed ' + 'it is less than or equal to ' + compareTree)
                        currentTree = false
                        break
                    }
                }
            }
            // Comapres Left
            if (currentTree === false) {
                for (let n = lineTree; n > 0; n--) {
                    // console.log('entering n loop')
                    var indexTree = forest[currentLine][lineTree]
                    var compareTree = forest[currentLine][n-1]
                    if (indexTree > compareTree) {
                        // console.log(indexTree + ' passed ' + 'it is greater than ' + compareTree)
                        currentTree = true
                    } else {
                        // console.log(indexTree + ' failed ' + 'it is less than or equal to ' + compareTree)
                        currentTree = false
                        break
                    }
                }
            }
            // Compares Top
            if (currentTree === false) {
                for (let m = currentLine; m > 0; m--) {
                    // console.log('entering m loop')
                    var indexTree = forest[currentLine][lineTree]
                    var compareTree = forest[m-1][lineTree]
                    if (indexTree > compareTree) {
                        currentTree = true
                        // console.log(indexTree + ' passed ' + 'it is greater than ' + compareTree)
                    } else {
                        // console.log(indexTree + ' failed ' + 'it is less than or equal to ' + compareTree)
                        currentTree = false
                        break
                    }
                }
            }
            // Compares Bottom
            if (currentTree === false) {
                for (let p = currentLine; p < forest.length - 1; p++) {
                    // console.log('entering p loop')
                    var indexTree = forest[currentLine][lineTree]
                    var compareTree = forest[p+1][lineTree]
                    if (indexTree > compareTree) {
                        currentTree = true
                        // console.log(indexTree + ' passed ' + 'it is greater than ' + compareTree)
                    } else {
                        // console.log(indexTree + ' failed ' + 'it is less than or equal to ' + compareTree)
                        currentTree = false
                        break
                    }
                }
            }
            if (currentTree) {
                visibleTrees++
            } else {
                notVisibleTrees++
            }
        }
        
    }
    visibleTrees = visibleTrees + (99 * 4) - 4
    console.log('Forest length: ' + forest.length)
    console.log('Forest width: ' + forest[0].length)
    console.log('Visible Trees: ' + visibleTrees)
    console.log('Not Visible Trees: ' + notVisibleTrees)
}
findVisibleTrees()


