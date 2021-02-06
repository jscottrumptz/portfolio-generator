const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the promise and send the error to the promises catch method
            if (err) {
                reject(err);
                // return out of the function
                return;
            }

            // if everything went well, resolve the promise and send data to the then method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            // if there's an error, reject the promise and send the error to the promises catch method
            if (err) {
                reject(err);
                // return out of the function
                return;
            }

            // if everything went well, resolve the promise and send data to the then method
            resolve({
                ok: true,
                message: 'File copied!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };