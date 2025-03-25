// slider.//
const imgs =document.querySelectorAll(".header-slider ul img");
const prev_btn =document.querySelector(".control_previous");
const next_btn =document.querySelector(".control_next");

let n = 0;

function changeSlide(){
    for(let i = 0; i < imgs.length; i++){
        imgs[i].style.display ="none"
    }
     imgs[n].style.display ="block"
}
changeSlide();

prev_btn.addEventListener('click', (e) =>{
    e.preventDefault()
    if(n > 0){
        n--;
    }else{
        n = imgs.length-1;
    }
    changeSlide()
    // setTimeout(“ChangePic()”,3000)
    // setTimeout(changeSlide, 1000)
    setTimeout(function () {
    },1000)
})
next_btn.addEventListener('click', (e) =>{
    e.preventDefault()
    if(n < imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    setTimeout(function () {
    },1000)
    
    changeSlide(e)
    console.log(n)

})

// scrolling products.//
const scrollContainer = document.querySelectorAll('.product');
for(const item of scrollContainer){
    item.addEventListener('wheel',(evt) => {
        evt.preventDefault();
        item.scrollLeft +=evt.deltaY;
    })
    console.log(scrollContainer)
}




