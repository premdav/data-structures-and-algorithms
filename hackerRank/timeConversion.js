'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    const designator = s.slice(-2)
    let timeSplit = s.substring(0, s.length - 2).split(':');
    if (designator === 'AM') {
        if (timeSplit[0] == '12') {
            return `00:${timeSplit[1]}:${timeSplit[2]}`;
        } else return timeSplit.join(':');
    } else {
        if (timeSplit[0] == '12') return timeSplit.join(':');
        timeSplit[0] = 12 + parseInt(timeSplit[0]);
        return timeSplit.join(':');
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}