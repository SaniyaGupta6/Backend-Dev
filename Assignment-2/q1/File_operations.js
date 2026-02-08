const fs = require('fs');// it will import fs module from Node.js
fs.readFile('input.txt', 'utf8', (err, data) => {//it will read file
    if (err) {// if error occurs(reading file)
        console.error(err);
        return;
    }

    const words = data.split(' ');//split text with space
    const count = words.length;//count no. of word

    fs.writeFile('output.txt', 'Word Count: ' + count, (err) => {//write word count into another file
        if (err) {//error occur(writing file)
            console.error(err);
            return;
        }
        console.log('Word count written to output.txt');//if everything work properly
    });
});
