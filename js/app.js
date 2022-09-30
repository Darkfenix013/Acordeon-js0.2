
const bloque = document.querySelectorAll('.bloque');
const pregunta = document.querySelectorAll('.pregunta');

   pregunta.forEach((cadapregunta, i) =>{
        pregunta[i].addEventListener(('click'), ()=>{
            bloque.forEach((cadaBloque, i)=>{
                bloque[i].classList.remove('cambioBB', 'nuevoBB', 'rotate');
            })
            bloque[i].classList.add('cambioBB', 'nuevoBB', 'rotate');
        })
   })