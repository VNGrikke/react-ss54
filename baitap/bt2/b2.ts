function divideNumbers(a: any, b: any): Promise<number> {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject("Các tham số phải là số.");
            return;
        }

        if (b === 0) {
            reject("Không thể chia cho 0");
            return;
        }

        resolve(a / b);
    });
}

divideNumbers(10, 2)
    .then(result => console.log("Kết quả 1:", result))
    .catch(error => console.log("Lỗi:", error))

divideNumbers(10, 0)
    .then(result => console.log("Kết quả 2:", result))
    .catch(error => console.log("Lỗi:", error))

divideNumbers("abc", 2)
    .then(result => console.log("Kết quả 3:", result))
    .catch(error => console.log("Lỗi:", error))
    .finally(() => console.log("Kết thúc hàm divideNumbers"));
