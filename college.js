const viewMore = document.querySelector(".clg-listing-verified");
const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");
const period = document.querySelector(".period");
const slides = document.querySelectorAll(".slide");


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
    }
    else{
        counter--;
        slideImage();      
    }
}

const goNext = () => {
    if (counter == 4) {
        slideImage();      
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