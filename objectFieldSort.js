function objSort(arr) {
    let isNotNull = false;
    for (let key in arr[0]) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][key] !== null) {
                isNotNull = true
                break
            }
        }
        if (!isNotNull) {
            arr.forEach(el => {
                delete el[key]
            })
        }
        isNotNull = false
    }
    return arr
}
console.log(objSort([{ a: 1, b: 1 }, { a: 1, b: 1 }, { a: 1, b: 1 }]))
console.log(objSort([{ a: null, b: 1 }, { a: null, b: 1 }, { a: 1, b: 1 }]))
console.log(objSort([{ a: null, b: 1 }, { a: null, b: 1 }, { a: null, b: 1 }]))