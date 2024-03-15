
//🚀 Typing Animation
let typingText = new Typed("#text", {
    strings: ["Lokeshwar", "Programmer", "Designer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
});


//🚀 Whenever click to day/night it work
let banner = document.querySelector(".banner");
let dayNight = document.querySelector(".dayNight");
dayNight.onclick = function () {
    banner.classList.toggle("night");
};


//🚀 for click in let's chat button it redirect to instagram page
function letChat() {
    location.href = "https://www.instagram.com/lokeshwarprasad1/";
}

//🚀 for click in Hire me chat button it redirect to instagram page
function hireMe() {
    location.href =
        "https://www.linkedin.com/in/lokeshwar-prasad-dewangan-7b2163211/";
}


//🚀 speech recognisation library used to told my bio
if ("speechSynthesis" in window) {
    const speech = new SpeechSynthesisUtterance();

    // Set the text to be spoken
    speech.text =
        " I am Full Stack Developer and pursuing my second year of BTech Computer Science branch. I am learner & spend more time on Computer technologies.";

    // Speak the text when the button is clicked
    document.getElementById("speak-btn").addEventListener("click", () => {
        window.speechSynthesis.speak(speech);
    });
} else {
    console.log("Text-to-speech not supported in this browser.");
}



//🚀 Animation using Shery.js and Locomotive.js gsap 
// // locomotive js for smooth-scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('.banner'),
    smooth: true
});

Shery.mouseFollower();
// // make magnet effect
Shery.makeMagnet(".magnet");


// circle magnet effects
Shery.hoverWithMediaCircle(".hvr", {
    videos: ["./videos/03.mp4", "./videos/3.mp4", "./videos/3.mp4"],
});