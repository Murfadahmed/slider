let slider  = document.querySelector('.slider')
// console.log(slider);

let slide = document.querySelectorAll('.slide')

let prevBtn  = document.querySelector('.prev')
let nextBtn = document.querySelector('.next')

//  console.log(nextBtn);

//  console.log(prevBtn);

let count = 0;

slide[count].classList.add('active')


prevBtn.addEventListener('click', prevFoo)

nextBtn.addEventListener('click', nextFoo)


function prevFoo(){

    slide[count].classList.remove('active')

    count = (count === 0) ? slide.length -1 : count - 1
    // console.log(count);
    slide[count].classList.add('active')

    slider.style.transform = `translateX(-${count * 100}%)`
}

function nextFoo(){

    slide[count].classList.remove('active')

    count = (count === slide.length -1) ? 0 : count +1
    // console.log(count);
    slide[count].classList.add('active')

    slider.style.transform = `translateX(-${count * 100}%)`



}