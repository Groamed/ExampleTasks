function convertToBase64(file) {
    new Promise(resolve => {
        let filereader = new FileReader()
        console.log(file)
        filereader.addEventListener('load', () => {
            const base64str = btoa(filereader.result)
            resolve(base64str)
        })
        filereader.readAsBinaryString(file)

    }).then(data => {
        console.log(data)
        document.querySelector('.img').src = 'data:image/png;base64,' + data
    })
}