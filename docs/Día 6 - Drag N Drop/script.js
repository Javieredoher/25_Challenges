// - Validar paso a paso hacer uso de console.log() y 
// la herramienta de desarrollador - 

// en este caso es importante utilizar los addEventListener para cada clases

// Utilizar el setTimeOut para el asicronismo

// Importante preventDefault en los eventos




const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart )
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {

    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)

}

function dragStart() {

    this.className += ' hold'

    //Justo al iniciar

    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'fill'

    //Justo al finalizar
}

function dragOver(e) {
    e.preventDefault()

    //cuando se mueve dentro del contenedor

}

function dragEnter(e) {

    e.preventDefault()
    this.className += ' hovered'
    //Cuando el elemento pasa sobre una zona de drop

}

function dragLeave() {

    this.className = 'empty'
    //cuando el elemento se suelta fuera del contenedor
}

function dragDrop() {

    this.className = 'empty'
    this.append(fill)

    //obtener información al soltarlo dentro de un contenedor (drop)

}

