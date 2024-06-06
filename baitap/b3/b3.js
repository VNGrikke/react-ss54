"use strict";
function sumArrayWithPromise(arr) {
    return new Promise((resolve) => {
        if (!Array.isArray(arr)) {
            console.log('lỗi');
            resolve(null);
            return;
        }
        const sum = arr.reduce((acc, curr) => acc + curr, 0);
        resolve(sum);
    });
}
const inputArray = [1, 2, 3, 4, 5, 6, 7];
sumArrayWithPromise(inputArray)
    .then(result => {
    if (result !== null) {
        console.log(result);
    }
    else {
        console.log('lỗi');
    }
});
