import * as fs from 'fs';

const inputFile = process.argv[2];
const rawData: string = fs.readFileSync('input.txt', 'utf8');
const forest: string[] = rawData.split('\r\n');



// console.log(forest)

function findVisibleTrees() {
    var scenicScores = []
    for (let i = 1; i < forest.length - 1; i++) {
        // console.log(forest[i])
        var currentLine = i
        // console.log('CurrentLine: ' + currentLine)
        for (let j = 1; j < forest[currentLine].length - 1; j++) {
            var visibleTreesTop = 0
            var visibleTreesRight = 0
            var visibleTreesLeft = 0
            var visibleTreesBottom = 0

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
                        visibleTreesRight++
                    } else {
                        // console.log(indexTree + ' failed ' + 'it is less than or equal to ' + compareTree)
                        visibleTreesRight++
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
                        visibleTreesLeft++
                    } else {
                        // console.log(indexTree + ' failed ' + 'it is less than or equal to ' + compareTree)
                        visibleTreesLeft++
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
                        visibleTreesTop++
                        // console.log(indexTree + ' passed ' + 'it is greater than ' + compareTree)
                    } else {
                        // console.log(indexTree + ' failed ' + 'it is less than or equal to ' + compareTree)
                        visibleTreesTop++
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
                        visibleTreesBottom++
                        // console.log(indexTree + ' passed ' + 'it is greater than ' + compareTree)
                    } else {
                        // console.log(indexTree + ' failed ' + 'it is less than or equal to ' + compareTree)
                        visibleTreesBottom++
                        break
                    }
                }
            }
            var totalScore = (visibleTreesRight * visibleTreesTop * visibleTreesLeft * visibleTreesBottom)
            scenicScores.push(totalScore)
            if (totalScore === 8) {
                console.log('Visible right: ' + visibleTreesRight)
                console.log('visible top: ' + visibleTreesTop)
                console.log('visible left: ' + visibleTreesLeft)
                console.log('visible bottom: ' + visibleTreesBottom)
            }

        } 
    }
    console.log(scenicScores)
    var topScenicScore = Math.max(...scenicScores)
    console.log(topScenicScore)
    var tpScenicScore = 0
    for (let score of scenicScores) {
        if (score > tpScenicScore) {
            tpScenicScore = score
        }
    }
    console.log(tpScenicScore)
}
findVisibleTrees()


