///////////////ES5////////////////

function StudentFun(name, lastname, birthYear, marks) {
    this.name = name
    this.lastname = lastname
    this.birthYear = birthYear
    this.marks = marks
    this.attendance = []
}

StudentFun.prototype.howOld = function () { return new Date().getFullYear() - this.birthYear }
StudentFun.prototype.mediumMark = function () { return this.marks.reduce((prev, now) => prev + now) / this.marks.length }
StudentFun.prototype.mediumAttendance = function () {
    let count = 0
    this.attendance.forEach(el => { if (el) { count++ } })
    return count / this.attendance.length
}

StudentFun.prototype.present = function () {
    if (this.attendance.length < 25) {
        this.attendance.push(true)
    } else {
        return 'End of grade'
    }
}

StudentFun.prototype.absent = function () {
    if (this.attendance.length < 25) {
        this.attendance.push(false)
    } else {
        return 'End of grade'
    }
}

StudentFun.prototype.summary = function () {
    const mediumMark = this.mediumMark()
    const mediumAttendance = this.mediumAttendance()
    if (mediumMark >= 90 && mediumAttendance >= 0.9) {
        return 'Ути какой молодчинка!'
    } else {
        if (mediumMark >= 90 || mediumAttendance >= 0.9) {
            return 'Норм, но можно лучше'
        } else {
            return 'Редиска!'
        }
    }
}

function generateMarks() {
    let marks = []
    for (let i = 0; i < 25; i++) {
        if (arguments[0]) {
            marks.push(Math.floor(Math.random() * (100 - arguments[0])) + arguments[0])
            continue
        }
        marks.push(Math.floor(Math.random() * 100))
    }
    return marks
}

const stud1 = new StudentFun('aaa', 'bbb', 1999, generateMarks())
const stud2 = new StudentFun('bbb', 'ccc', 2001, generateMarks())
const stud3 = new StudentFun('ccc', 'ddd', 1998, generateMarks(90))
for (let i = 0; i < 10; i++) {
    stud1.present()
}
for (let i = 0; i < 15; i++) {
    stud1.absent()
}
for (let i = 0; i < 23; i++) {
    stud2.present()
    stud3.present()
}
for (let i = 0; i < 2; i++) {
    stud2.absent()
    stud3.absent()
}
stud1.mediumMark()
stud1.mediumAttendance()
stud1.howOld()
stud1.summary()

stud2.mediumMark()
stud2.mediumAttendance()
stud2.howOld()
stud2.summary()

stud3.mediumMark()
stud3.mediumAttendance()
stud3.howOld()
stud3.summary()

function GroupOfStudentsFun(group) {
    this.group = group
}

GroupOfStudentsFun.prototype.attendance = function () {
    let attendanceRating = new Map()
    this.group.forEach(el => {
        attendanceRating.set(el.name, el.mediumAttendance())
    })
    if (arguments[0]) {
        let sortedAttendanceRating = [...attendanceRating.entries()].sort((a, b) => b[1] - a[1])
        for (let i = 0; i < sortedAttendanceRating.length; i++) {
            if (sortedAttendanceRating[i][0] === arguments[0]) {
                return (i + 1) + ' - Место по посещению'
            }
        }
    } else {
        let mediumGroupAttendence = 0
        for (let mediumAttendence of attendanceRating.values()) {
            mediumGroupAttendence += mediumAttendence
        }
        return (mediumGroupAttendence / attendanceRating.size) + ' - Среднее посещение по группе'
    }
}

GroupOfStudentsFun.prototype.marks = function () {
    let marksRating = new Map()
    this.group.forEach(el => {
        marksRating.set(el.name, el.mediumMark())
    })
    if (arguments[0]) {
        let sortedMarksRating = [...marksRating.entries()].sort((a, b) => b[1] - a[1])
        for (let i = 0; i < sortedMarksRating.length; i++) {
            if (sortedMarksRating[i][0] === arguments[0]) {
                return (i + 1) + ' - Место по оценкам'
            }
        }
    } else {
        let mediumGroupMarks = 0
        for (let mediumMarks of marksRating.values()) {
            mediumGroupMarks += mediumMarks
        }
        return (mediumGroupMarks / marksRating.size) + ' - Средний балл по группе'
    }
}

const group1 = new GroupOfStudentsFun([stud1, stud2, stud3])
group1.attendance()
group1.attendance('bbb')
group1.marks()
group1.marks('ccc')

//////////////ES6////////////////

class StudentClass {
    constructor(name, lastname, birthYear, marks) {
        this.name = name
        this.lastname = lastname
        this.birthYear = birthYear
        this.marks = marks
        this.attendance = []
    }

    howOld() { return new Date().getFullYear() - this.birthYear }
    mediumMark() { return this.marks.reduce((prev, now) => prev + now) / this.marks.length }
    mediumAttendance() {
        let count = 0
        this.attendance.forEach(el => { if (el) { count++ } })
        return count / this.attendance.length
    }

    present() {
        if (this.attendance.length < 25) {
            this.attendance.push(true)
        } else {
            return 'End of grade'
        }
    }

    absent() {
        if (this.attendance.length < 25) {
            this.attendance.push(false)
        } else {
            return 'End of grade'
        }
    }

    summary() {
        const mediumMark = this.mediumMark()
        const mediumAttendance = this.mediumAttendance()
        if (mediumMark >= 90 && mediumAttendance >= 0.9) {
            return 'Ути какой молодчинка!'
        } else {
            if (mediumMark >= 90 || mediumAttendance >= 0.9) {
                return 'Норм, но можно лучше'
            } else {
                return 'Редиска!'
            }
        }
    }
}

const stud4 = new StudentClass('aaa', 'bbb', 1999, generateMarks())
const stud5 = new StudentClass('bbb', 'ccc', 2001, generateMarks())
const stud6 = new StudentClass('ccc', 'ddd', 1998, generateMarks(90))
for (let i = 0; i < 10; i++) {
    stud4.present()
}
for (let i = 0; i < 15; i++) {
    stud4.absent()
}
for (let i = 0; i < 23; i++) {
    stud5.present()
    stud6.present()
}
for (let i = 0; i < 2; i++) {
    stud5.absent()
    stud6.absent()
}
stud4.mediumMark()
stud4.mediumAttendance()
stud4.howOld()
stud4.summary()

stud5.mediumMark()
stud5.mediumAttendance()
stud5.howOld()
stud5.summary()

stud6.mediumMark()
stud6.mediumAttendance()
stud6.howOld()
stud6.summary()

class GroupOfStudentsClass {
    constructor(group) {
        this.group = group
    }

    attendance() {
        let attendanceRating = new Map()
        this.group.forEach(el => {
            attendanceRating.set(el.name, el.mediumAttendance())
        })
        if (arguments[0]) {
            let sortedAttendanceRating = [...attendanceRating.entries()].sort((a, b) => b[1] - a[1])
            for (let i = 0; i < sortedAttendanceRating.length; i++) {
                if (sortedAttendanceRating[i][0] === arguments[0]) {
                    return (i + 1) + ' - Место по посещению'
                }
            }
        } else {
            let mediumGroupAttendence = 0
            for (let mediumAttendence of attendanceRating.values()) {
                mediumGroupAttendence += mediumAttendence
            }
            return (mediumGroupAttendence / attendanceRating.size) + ' - Среднее посещение по группе'
        }
    }

    marks() {
        let marksRating = new Map()
        this.group.forEach(el => {
            marksRating.set(el.name, el.mediumMark())
        })
        if (arguments[0]) {
            let sortedMarksRating = [...marksRating.entries()].sort((a, b) => b[1] - a[1])
            for (let i = 0; i < sortedMarksRating.length; i++) {
                if (sortedMarksRating[i][0] === arguments[0]) {
                    return (i + 1) + ' - Место по оценкам'
                }
            }
        } else {
            let mediumGroupMarks = 0
            for (let mediumMarks of marksRating.values()) {
                mediumGroupMarks += mediumMarks
            }
            return (mediumGroupMarks / marksRating.size) + ' - Средний балл по группе'
        }
    }
}

const group2 = new GroupOfStudentsClass([stud4, stud5, stud6])
group2.attendance()
group2.attendance('bbb')
group2.marks()
group2.marks('ccc')