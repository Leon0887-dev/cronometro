
let hrs = 0 ; 
let min = 0; 
let seconds = 0; 
let timer;
const watch = document.querySelector('.timer');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');

function startingSeconds(seconds){
    const date = new Date(seconds * 1000) // converte para milesegundos
    return date.toLocaleTimeString('pt-BR',{ timeZone: 'UTC'})
}

function startingStopwatch(){
     timer = setInterval(()=>{
        seconds++ 
        watch.innerHTML = startingSeconds(seconds);
    }, 1000);
}


start.addEventListener('click', e => {
    clearInterval(timer);
    watch.classList.remove('clicked');
    startingStopwatch();
})
pause.addEventListener('click', e => {
    clearInterval(timer);
    if(seconds > 0) watch.classList.add('clicked');
})
reset.addEventListener('click', e => {
    clearInterval(timer);
    watch.classList.remove('clicked');
    watch.innerHTML = '00:00:00';
    seconds = 0;
})

