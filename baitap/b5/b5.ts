function isPrimeWithPromise(number: number): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if (number <= 1) {
        resolve(false);
      } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) {
            resolve(false);
            return;
          }
        }
        resolve(true);
      }
    });
  }
  
  
  isPrimeWithPromise(2).then(result => console.log(result));   
  isPrimeWithPromise(3).then(result => console.log(result)); 
  isPrimeWithPromise(4).then(result => console.log(result)); 
  