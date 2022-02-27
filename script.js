const arrows = document.querySelectorAll('.arrow');
const all = document.querySelector('.all');
const login = document.querySelector('.h2login');
const body = document.querySelector('.body');




let count= 0;


arrows.forEach(arrow =>{
    const input =arrow.previousElementSibling;
    arrow.addEventListener('click', ()=>{
        if (input.value.length < 6){
            input.style.animation = 'shake 0.2s normal 3';
            arrow.style.backgroundColor = 'rgb(209,89,89)';
        }else{
           
            arrow.style.backgroundColor = 'rgb(15,126,89)';
            count++;
            console.log('count');
            if (count === 3){
                body.style.background = 'rgb(28, 63, 57)';
                all.style.animation = 'drag5 1s normal 1 forwards';
                all.addEventListener('animationend', ()=>{
                    login.style.animation = 'text 2s 1 normal forwards';
                
                

            }
            

            
           
        )}


}})})
