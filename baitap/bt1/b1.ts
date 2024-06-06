function calculateBMI(weight: any, height: any): Promise<string> {
    return new Promise((resolve, reject) => {
        if (typeof weight !== 'number' || typeof height !== 'number') {
            reject("Cân nặng và chiều cao không hợp lệ");
            return;
        }
        if (weight <= 0 || height <= 0) {
            reject("Cân nặng và chiều cao không hợp lệ");
            return;
        }
        const bmi = weight / (height * height);
        resolve(bmi.toFixed(2));
    });
}

calculateBMI(70, 1.75)
    .then(result => console.log(result))
    .catch(error => console.log(error));

calculateBMI("70", 1.75)
    .then(result => console.log(result))
    .catch(error => console.log(error));

calculateBMI(70, -1.75)
    .then(result => console.log(result))
    .catch(error => console.log(error));
