
// ¿Cuál es la opción que sirve?

//const panels = document.querySelectorAll('.panel')
//const panels = document.querySelector('.panel')
//const panels = document.getElementById('panel')
//const panels = document.getElementsByClassName('.panel')


let idpanel
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {

    panel.addEventListener('click', () => {
        
        panel.classList.add('active')
        idpanel=panel.id
        removeActiveClasses()
    })
})


function removeActiveClasses(){
    panels.forEach((panel) => {

        if(panel.id!=idpanel) {   

            panel.classList.remove('active')
            
            console.log(panel.id)
        }
    })
}




