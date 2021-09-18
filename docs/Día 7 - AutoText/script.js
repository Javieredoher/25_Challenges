const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }
    
    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)

    //setTimeout(writeText(), 3000)



//speedEl.addEventListener('', (e) => speed =  / )

/* En este caso les damos una estructura guía donde deben encontrar las variables e identificadores necesarios en cada caso.
JS

 - Validar paso a paso hacer uso de console.log() y la herramienta de desarrollador - 

- Definir la velocidad

- utilizar los métodos js para defirnir el lenght

- setTimeOut recibe 2 parametros

- addEventListner ('', () => xxxx = 300, x.xxxxxx.xxxxx)*/