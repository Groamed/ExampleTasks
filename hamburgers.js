/////////////ES5/////////////

function HamburgerFunFun(size, filling) {
    this.recipe = { size: size, filling: filling, topping: [] }
}

HamburgerFunFun.SIZE_SMALL = { cost: 50, calories: 20 }
HamburgerFunFun.SIZE_BIG = { cost: 100, calories: 40 }

HamburgerFun.FILLING_CHEESE = { cost: 10, calories: 20 }
HamburgerFun.FILLING_SALAD = { cost: 20, calories: 5 }
HamburgerFun.FILLING_POTATO = { cost: 15, calories: 10 }

HamburgerFun.TOPPING_SPICE = { cost: 15, calories: 0 }
HamburgerFun.TOPPING_MAYO = { cost: 20, calories: 5 }

HamburgerFun.prototype.addTopping = function (topping) { this.recipe.topping.push(topping) }
HamburgerFun.prototype.calculateCost = function () {
    let sum = 0
    for (let key in this.recipe) {
        if (key === 'topping') {
            this.recipe[key].forEach(el => {
                sum += el['cost']
            })
            continue
        }
        sum += this.recipe[key]['cost']
    }
    return 'Cost of the hamburger - ' + sum
}

HamburgerFun.prototype.calculateCalories = function () {
    let sum = 0
    for (let key in this.recipe) {
        if (key === 'topping') {
            this.recipe[key].forEach(el => {
                sum += el['calories']
            })
            continue
        }
        sum += this.recipe[key]['calories']
    }
    return 'Calories of the hamburger - ' + sum
}

const ham1 = new HamburgerFun(HamburgerFun.SIZE_SMALL, HamburgerFun.FILLING_POTATO)
ham1.calculateCost()
ham1.calculateCalories()

ham1.addTopping(HamburgerFun.TOPPING_MAYO)
ham1.calculateCost()
ham1.calculateCalories()

ham1.addTopping(HamburgerFun.TOPPING_SPICE)
ham1.calculateCost()
ham1.calculateCalories()

//////////////ES6/////////////////

class HamburgerClass {
    constructor(size, filling) {
        this.recipe = { size: size, filling: filling, topping: [] }
    }

    addTopping(topping) { this.recipe.topping.push(topping) }

    calculateCost() {
        let sum = 0
        for (let key in this.recipe) {
            if (key === 'topping') {
                this.recipe[key].forEach(el => {
                    sum += el['cost']
                })
                continue
            }
            sum += this.recipe[key]['cost']
        }
        return 'Cost of the hamburger - ' + sum
    }

    calculateCalories() {
        let sum = 0
        for (let key in this.recipe) {
            if (key === 'topping') {
                this.recipe[key].forEach(el => {
                    sum += el['calories']
                })
                continue
            }
            sum += this.recipe[key]['calories']
        }
        return 'Calories of the hamburger - ' + sum
    }

    static get SIZE_SMALL() { return { cost: 50, calories: 20 } }
    static get SIZE_BIG() { return { cost: 100, calories: 40 } }

    static get FILLING_CHEESE() { return { cost: 10, calories: 20 } }
    static get FILLING_SALAD() { return { cost: 20, calories: 5 } }
    static get FILLING_POTATO() { return { cost: 15, calories: 10 } }

    static get TOPPING_SPICE() { return { cost: 15, calories: 0 } }
    static get TOPPING_MAYO() { return { cost: 20, calories: 5 } }
}

const ham2 = new HamburgerClass(HamburgerClass.SIZE_SMALL, HamburgerClass.FILLING_POTATO)
ham2.calculateCost()
ham2.calculateCalories()

ham2.addTopping(HamburgerClass.TOPPING_MAYO)
ham2.calculateCost()
ham2.calculateCalories()

ham2.addTopping(HamburgerClass.TOPPING_SPICE)
ham2.calculateCost()
ham2.calculateCalories()