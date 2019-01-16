function convertToBase64(files) {
    let strArr = []
    let count = 0
    const filesCount = files.length
    return new Promise(resolve => {
        for (let file of files) {
            let filereader = new FileReader()
            filereader.addEventListener('load', () => {
                strArr.push(btoa(filereader.result))
                count++
                if (count === filesCount) {
                    resolve(strArr)
                }
            })
            filereader.readAsBinaryString(file)
        }
    })
}

function imageSet(strArr) {
    strArr.forEach(elem => {
        let img = document.createElement('img')
        img.src = 'data:image/png;base64,' + elem
        document.body.append(img)
    });
}

function startConv(files) {
    convertToBase64(files)
        .then(res => imageSet(res))
}