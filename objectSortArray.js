function objSort(arr) {
    const map = new Map();
    const newMap = new Map();
    for (const key in arr[0]) {
        map.set(key, false);
    }
    arr.reduce((prev, obj) => {
        map.forEach((value, prop) => {
            if (obj[prop] !== null) {
                newMap.set(prop, obj[prop]);
            }
        })
    });
    const resultArr = arr.map(obj => {
        const resultObj = {};
        newMap.forEach((value, prop) => {
            resultObj[prop] = obj[prop];
        })
        return resultObj;
    });

    return resultArr;
}

objSort([{ a: 1, b: 1 }, { a: 1, b: 1 }, { a: 1, b: 1 }])
objSort([{ a: null, b: 1 }, { a: null, b: 1 }, { a: 1, b: 1 }])
objSort([{ a: null, b: 1 }, { a: null, b: 1 }, { a: null, b: 1 }])