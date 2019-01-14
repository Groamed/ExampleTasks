function parse(str) {
    const reg = /[а-ю]+/gi
    const arrRes = str.match(reg)
    return arrRes.sort(compare);
}

const compare = (a, b) => (a.toLowerCase() < b.toLowerCase()) ? -1 : (a.toLowerCase() > b.toLowerCase()) ? 1 : 0;
console.log(parse('Привет,   как дела?'))