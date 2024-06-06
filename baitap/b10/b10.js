"use strict";
function findElement(arr, searchValue) {
    return new Promise((resolve, reject) => {
        const index = arr.findIndex((element) => element === searchValue);
        if (index !== -1) {
            resolve({ value: arr[index], index });
        }
        else {
            reject(new Error(`Không tìm thấy phần tử ${searchValue}`));
        }
    });
}
const inputArray = [1, 2, 3, 4, 5];
const searchValue = 7;
findElement(inputArray, searchValue)
    .then((result) => {
    console.log("Kết quả:", result.value, "tại vị trí:", result.index);
})
    .catch((error) => {
    console.error("Lỗi:", error.message);
});
