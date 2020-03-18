import fs from 'fs';
import readLine from 'readline';
import Stream from 'stream';

const inputStream = fs.createReadStream('file.txt');
const outputStream = new Stream();
const rl = readLine.createInterface(inputStream, outputStream);

let result = Number.POSITIVE_INFINITY;

let parseLine = function(line) {
    const numbers = line
        .split(' ')
        .filter(x => x);
    numbers.forEach(x => {
        const number = +x;
        if(result === Number.POSITIVE_INFINITY){
            result = number;
        }
        result ^= number;
    });
};

rl.on('line', (line) => parseLine(line));
rl.on('close', () => console.log('Result: ', result));
