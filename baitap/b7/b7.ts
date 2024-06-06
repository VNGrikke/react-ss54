const myPromise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue > 0.5) {
            resolve(`Success!${randomValue}`);
        } else {
            reject(`Error!${randomValue}`);
        }
    }, 1000);
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error); 
    });
