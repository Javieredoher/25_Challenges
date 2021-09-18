//  - Validar paso a paso hacer uso de console.log() y la herramienta de desarrollador - 
// Queremos disparar un evento cuando nos desplazamos así que en la ventana, vamos a agregar un detector de eventos de scroll
// y cuando ocurra eso, tendremos una función llamada checkboxes porque queremos verificar el posicionamiento de cada caja.

// Entonces, ¿dónde está el punto de activación?, ¿Dónde queremos cuando nos desplazamos hacia abajo, 
// dónde queremos que empiecen a aparecer?

// Usaremos window.innerHeight para determinar nuestro trigger point (validen que sea un poco menor al la altura normal de la ventana)

// entonces usaremos el siguiente método getBoundingClientRect (averiguar su funcionalidad) - 
// https://developer.mozilla.org/es/docs/Web/API/Element/getBoundingClientRect

// por último usaremos condicionales para crear el efecto de entrada y salida de elementos box.

// Dato curioso:

// Existen librerías para hacer este tipo de efectos pueden buscarlo como: Animate on scroll 
// (pueden revisar su documentación si desean pero no aplica para el ejercicio)


const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
        
    const triggerBottom = window.innerHeight / 5 * 4

    console.log(triggerBottom)

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
         
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
        
    })
    
}