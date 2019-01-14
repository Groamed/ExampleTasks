function objSort(arr) {
    let newObjArr = []
    for (let i = 0; i < arr.length; i++) {
        newObjArr[i] = {}
    }
    let isNotNull = false;
    for (let key in arr[0]) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][key] !== null) {
                isNotNull = true
                break
            }
        }
        if (isNotNull) {
            for (let i = 0; i < arr.length; i++) {
                newObjArr[i][key] = arr[i][key]
            }
        }
        isNotNull = false
    }
    return newObjArr
}
console.log(objSort([{ a: 1, b: 1 }, { a: 1, b: 1 }, { a: 1, b: 1 }]))
console.log(objSort([{ a: null, b: 1 }, { a: null, b: 1 }, { a: 1, b: 1 }]))
console.log(objSort([{ a: null, b: 1 }, { a: null, b: 1 }, { a: null, b: 1 }]))