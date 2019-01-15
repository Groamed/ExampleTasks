function multipleSum(num) {
    let sum = num;
    function sumHelper(arg) {
        sum += arg
        return sumHelper
    }
    sumHelper.valueOf = () => sum
    return sumHelper
}

multipleSum(1)(2)(3) //6

////////////////////////////////////////////////////

function sum(...args) {
    let sum = 0
    args.forEach(el => {
        sum = sum + el
    })
    return sum
}

function sub(...args) {
    let sub = 0
    args.forEach(el => {
        sub = sub - el
    })
    return sub
}

function memoisation(func) {
    let memory = {}
    let operationalFunc = func
    return function (...args) {
        if (memory[args]) {
            return memory[args]
        } else {
            memory[args] = operationalFunc.apply(this, args)
            return memory[args]
        }
    }
}

let memSum = memoisationSum(sum)
let memSub = memoisationSum(sub)

memSum(1, 2, 3) //6
memSum(7, 4)  //11
memSub(1, 2, 3) //-6
memSub(4, 3) //-7