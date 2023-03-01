const images = document.querySelectorAll(".container img")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
let paragraph = document.querySelectorAll('.container p')
let current = 0

next.addEventListener('click', () => {
    paragraph[current].classList.remove('active')
    images[current].classList.remove('active')
    current++;
    if(current === images.length && paragraph.length){
       current =  0
    }
    paragraph[current].classList.add('active')
    images[current].classList.add('active')
})

prev.addEventListener('click',()=>{
    paragraph[current].classList.remove('active')
    images[current].classList.remove('active')
    current--;

    if(current < 0){
        current = images.length - 1
    }
    paragraph[current].classList.add('active')
    images[current].classList.add('active')
})