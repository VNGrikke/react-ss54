"use strict";
function sortArrayWithPromise(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject("không phải mảng");
        }
        const sortedArr = arr.slice().sort((a, b) => a - b);
        resolve(sortedArr);
    });
}
sortArrayWithPromise([1, 7, 2, 9, 5])
    .then((sortedArray) => {
    console.log(sortedArray);
})
    .catch((error) => {
    console.error("Error:", error);
});
