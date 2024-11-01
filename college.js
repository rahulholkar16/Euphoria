const viewMore = document.querySelector(".clg-listing-verified");
const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");
const period = document.querySelector(".period");

viewMore.addEventListener('click',event=>{
    const current = event.target;
    const isReadMoreBtn = current.className.includes('read-more-btn');
    if(!isReadMoreBtn) return;
    const currentText = event.target.parentNode.querySelector(".read-more-text");
    currentText.classList.toggle('read-more-text--show');
    current.textContent = current.textContent.includes("Read More") ? "Read Less..." : "Read More..."
});


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
    period.innerHTML = periods;
}

var updateClock = setInterval(clock, 1000);