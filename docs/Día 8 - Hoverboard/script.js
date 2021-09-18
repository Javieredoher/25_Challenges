const container = document.getElementById('container')
const colors = ['red', 'blue', 'green', 'white', 'black']
const SQUARES = 500


for(let i = 0; i < SQUARES; i++ ) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

 function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = '20px 20px 20px 20px yellow, 20px 20px 20px 20px red;'
 }

 function removeColor(element) {
    element.style.background = 'rgba(77, 75, 75, 0.753)'
    // element.style.boxShadow = ''
 }

 function getRandomColor() {
    return colors[Math.floor(Math.random()*5)]
 }

