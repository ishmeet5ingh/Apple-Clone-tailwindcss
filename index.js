import { devices } from './devices.js';

const devs = document.querySelector(".devices");


devices.forEach(item =>{
    var div = document.createElement('div');
    var imgElement = document.createElement('img');
    var heading = document.createElement('h4');
    imgElement.src = item.img;
    heading.innerHTML = item.heading;
    imgElement.style.width = "150px"
    imgElement.style.paddingBlock = "15px"
    div.appendChild(imgElement)
    div.appendChild(heading)
    div.classList.add("pr-4", "md:pr-10", "inline-block", )
    devs.appendChild(div)
})

// devs.lastChild.classList.add('pr-10','md:pr-20')

document.addEventListener('DOMContentLoaded', function () {
  const animatedDiv = document.getElementById('animatedDiv');
  const overlay = document.querySelector('.overlay');
  const slider = document.querySelectorAll('.slider');
  const iTag = document.querySelectorAll('.iTag');
  const i1 = document.querySelector('.fa-chevron-left');
  const i2 = document.querySelector('.fa-chevron-right');
  var counter = 0;

  slider.forEach((slide, index) =>{
    slide.style.left = `${index * 100}%`
});

i1.addEventListener("click", function(){
    counter = (counter-1+slider.length)%slider.length
    slideImage();
    console.log(counter)
})
i2.addEventListener("click", function(){
    counter = (counter+1)%slider.length
    slideImage();
    console.log(counter)
})


const slideImage = () => {
    slider.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    });
}

  // Trigger the animation on page load
  setTimeout(() => {
        animatedDiv.classList.remove('opacity-0', 'translate-y-[-150%]');
        animatedDiv.classList.add('opacity-100', 'translate-y-0');
    }, 100);
    setTimeout(() => {
        slider.forEach(slider => {
            slider.classList.remove('text-white');
            slider.classList.add('text-[#848484]');
        }); 

        overlay.classList.remove('bg-[#0171E3]');
        overlay.classList.add('bg-white');

        iTag.forEach(iTag => {
            iTag.classList.remove('text-[#0171E3]');
            iTag.classList.add('text-[#848484]');
        }); 
    }, 1000);
});
