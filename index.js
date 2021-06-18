const { app, BrowserWindow } = require("electron");

function createWindow () {
    const win = new BrowserWindow({ width: 800, height: 600 })
    win.loadURL("https://cvccorp.nexusweb.com.br/")

    win.webContents.executeJavaScript(`
        const sltDado = document.getElementById("cboCampo")
        const txtDado = document.getElementById("txtValor")
        const txtSenha = document.getElementById("txtSENHA")
        const time = document.getElementById("cboLocal")
        const rows = document.getElementsByClassName("col-md-3")
        const submitBtns = document.getElementsByClassName("submit-senha")
        const captcha = document.getElementById("imgCaptcha")

        sltDado.value = 2
        txtDado.value = 43185049802
        txtSenha.value = 431850498020208
        time.value = 6065


        sltDado.style.display = "none"
        txtDado.style.display = "none"
        txtSenha.style.display = "none"
        time.style.display = "none"
        submitBtns[0].style.display = "none"
        submitBtns[1].style.display = "none"
        rows[0].style.display = "none"
        rows[1].style.display = "none"
        rows[2].style.display = "none"
        captcha.style.marginBottom = "30px"
    `, function (result) {
        console.log(result)
    })

    // const captcha = document.getElementById("imgCaptcha")
    // const script = document.createElement('script');
    // script.setAttribute('src','https://unpkg.com/tesseract.js@v2.1.0/dist/tesseract.min.js');
    // document.head.appendChild(script);
 
    // fetch(captcha).then(response => console.log(response.json()))

    // setTimeout(() => {
    //     Tesseract.recognize(captcha, 'eng', { logger: m => console.log(m.status) })
    //     .then(function(result) {
    //         console.log(result.data)
    //     })                                                                            
    // }, 2000)   
}

app.on("ready", createWindow);
