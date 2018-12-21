'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}


// Complete the hourglassSum function below.
function hourglassSum(arr) {
    const maxY = arr.length;
    const maxX = arr[0].length;
    const maxStartY = maxY - 2;
    const maxStartX = maxX - 2;

    let biggestGlass = 0;
    let thisGlass;

    for (let y = 0; y < maxStartY; y++) {
        for (let x = 0; x < maxStartX; x++) {
            thisGlass = sumHG(arr, x, y);
            biggestGlass = (thisGlass > biggestGlass) ? thisGlass : biggestGlass;
        }
    }
    return biggestGlass;
}

// Tally an hourglass in arr whose upper-left corner is at x, y
function sumHG(arr, x, y) {
    let sum = arr[y][x] + arr[y][x + 1] + arr[y][x + 2];
    sum += arr[y + 1][x + 1];
    sum += arr[y + 2][x] + arr[y + 2][x + 1] + arr[y + 2][x + 2];
    return sum;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
