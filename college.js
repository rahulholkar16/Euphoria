const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");
const period = document.querySelector(".period");
const slides = document.querySelectorAll(".slide");
const slider_box = document.querySelector(".college-card-silder");
const search_box = document.querySelector(".search-box");
const box = document.querySelector(".active_box");
const Closs = document.querySelector("#closs");


// ---------------Clock-section----------------

function clock(){
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    let periods = "AM";
    // set the time period (AM/PM)
    if(hours >= 12){
        periods = "PM";
    }

    //add the 0 for the values lower than 10
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
}

var updateClock = setInterval(clock, 1000);

// ---------------------slider section---------------------------

var counter = 0;
slides.forEach(
    (slide,index)=>{
        slide.style.left = `${index * 100}%`
    }
)

const goPrev = () => {
    if (counter <= 0) {
        slideImage();      
        counter = 5;
    }
    else{
        counter--;
        slideImage();      
    }
}

const goNext = () => {
    if (counter == 4) {
        slideImage(); 
        counter = -1;     
    }
    else{
        counter++;
        slideImage();      
    }
}

const slideImage = () =>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}

//----for auto sliding------

function autoSliding(){
    deletInterval = setInterval(timer , 2000);
    function timer(){
        goNext();
    }
}

autoSliding();

//stop auto sliding when mouse is over

slider_box.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
});

//resume sliding when mouse is out.

slider_box.addEventListener('mouseout',autoSliding);


// ------------Search-box----------------------------

box.addEventListener('click',()=>{
    search_box.style.visibility = 'visible';
    search_box.style.transition = 'all 0.3s ease 0s';
});

Closs.addEventListener('click',()=>{
    search_box.style.visibility = 'hidden';
    Closs.style.transition = 'all 0.3s ease 0.2s';
});