function countDown(n: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (n < 0) {
            reject("Số giây không hợp lệ!");
        } else {
            let remainingSeconds = n;
            const intervalId = setInterval(() => {
                if (remainingSeconds === 0) {
                    clearInterval(intervalId);
                    resolve("Hoàn thành quá trình đếm!");
                } else {
                    console.log(remainingSeconds);
                    remainingSeconds--;
                }
            }, 1000);
        }
    });
}

countDown(5)
    .then((message: string) => console.log(message))
    .catch((error: string) => console.log(error));
