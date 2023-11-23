//global vars
let arr = document.querySelector('.relative-container')
let prompt = document.querySelector('.age-title')
let form = document.querySelector('.wrapper')
let height = window.innerHeight
let width = window.innerWidth
let general_width = 1920
let array = [...arr.children]
array.forEach((span,i)=>{
    span.style=`top:${(i+.5)*(height/3)}px;right:-1500px`
    console.log(span)
})
let input = document.querySelector('.age-input')
let not_a_digit= /[^\d]/g

input.addEventListener('input',(e)=>{
    if(e.target.value!==''){
        input.replaceChild(not_a_digit,'')
    }
})


//functions
const unload = () => {
    array.forEach((span,i)=>{
        setTimeout(()=>{
            if(width <= (general_width*.5)){
                span.style=`top:${(i+.5)*(height/3)}px;right:${i*(innerWidth/(array.length+2.25))}px`
            }
            else{
                span.style=`top:${(i+.5)*(height/3)}px;right:${i*(innerWidth/(array.length+1.25))}px`
            }
        },(i+1)*1000)
    })
}
const prompt_appears = (array) => {
setTimeout(()=>{
    if(prompt.classList.contains('opacity-0') && form.classList.contains('opacity-0')){
        prompt.classList.toggle('opacity-100')
        form.classList.toggle('opacity-100')
    }
},(array.length+1)*1000)
}
prompt_appears(array)


    