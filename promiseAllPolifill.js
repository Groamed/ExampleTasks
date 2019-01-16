function promAll(arr) {
    const resultAnwer = [];
    let count = 0;
    const sizePromise = arr.length;
    return new Promise((resolve, reject) => {
        arr.forEach((promise, index) => {
            promise.then(data => {
                resultAnwer[index] = data;
                count++;
                if (count === sizePromise) {
                    resolve(resultAnwer);
                }
            }).catch(err => {
                reject(err)
            });
        });
    })
}

const prom1 = new Promise(resolve => setTimeout(() => resolve('1'), 500))
const prom2 = new Promise(resolve => setTimeout(() => resolve('2'), 400))
const prom3 = new Promise((resolve, reject) => setTimeout(() => resolve('3'), 700))
const prom4 = new Promise(resolve => setTimeout(() => resolve('4'), 100))
promAll([prom1, prom2, prom3, prom4])
    .then(data => console.log(data))
    .catch(err => console.log(err))