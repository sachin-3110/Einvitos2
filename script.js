document.addEventListener('DOMContentLoaded', function () {
    LoaderAnimation()
});


gsap.registerPlugin(ScrollTrigger)

var tl = gsap.timeline()
var tl2 = gsap.timeline()
var tl3 = gsap.timeline()


let mundanTxt = "Mundan, yaani pehli baar baal kaatna, ek bahut hi mahatvapurn Hindu sanskar hai jo chhoti umar ke bachchon ka sir mundvane ke roop me manaya jata hai. Yeh paramparaik vidhi Hindu dharm me shuddhi aur sanskari jeevan ki shuruaat ka pratik mana jata hai."

let splitMundanTxt = mundanTxt.split(" ")
let mundanDescp = document.getElementById("mundanDescp")

// Gallery Text
galleryText = "Gallery"
galtxt = document.getElementById("galleryText")
splitGaltxt = galleryText.split("")
splitGaltxt.forEach(elem => {
    span = document.createElement("span")
    span.innerHTML = elem
    galtxt.appendChild(span)
})



gsap.from("#Parents #textArea", {
    delay: 1,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: "#Parents"
    }

})
var main = document.getElementById("mainContainer")
function MainVisible(){

    main.style.display="flex";
    main.style.backgroundColor="black"
    gsap.from("#mainContainer",{
        height:"100%",
        opacity:0,
        duration:2,
        onComplete(){
            textMundaAnimation()
        }
    })
}
function LoaderAnimation() {

    tl.from("#kkm", {
        duration: 1.5,
        width: 0,
        ease: "back.out(1.7)",
    })
    tl.to("#kkm h1", {
        delay: 0.25,
        duration: 0.5,
        color: "yellow",
    })
    tl.to("#progress-bar", {
        delay: 0,
        width: "100%",  
        duration: 2.5,    
        ease: "power2.out" 
    });
    tl.to("#clickAnyWhere", {
        duration: 0.5,
        opacity: 1,
        y: 5,
        repeat: -1,
        yoyo: true,
    })

    tl.to("#Loader", {
        delay: 0.5,
        duration:4,
        y:"-100%",
        ease: Power2.easeOut,
        onComplete() {
            var loaderSelector = document.getElementById("Loader")
            var footer = document.getElementsByTagName("footer")
            loaderSelector.style.display="none";  
            MainVisible()
        }
    }
    
)

  

}

function textMundaAnimation() {
    var NewTimeline=gsap.timeline()
    splitMundanTxt.forEach(element => {
        let newSpanEle = document.createElement("span")
        newSpanEle.innerHTML = element + " "
        mundanDescp.appendChild(newSpanEle)
    
    })  
    NewTimeline.from("#mundanDescp span", {
        opacity: 0, y: 20, stagger: 0.3, duration: 2,
        scrollTrigger: ("#mundaDescp", {
            stagger: 0.1,
            start:"top",
            end:"3%",
            scrub: 1,
            onComplete(){
                
            }

        })
    });
    NewTimeline.from("#mainContainer #starAnimation1", {
        rotate: 360,
        duration: 1,
        yoyo: true,
        scrollTrigger: ("main", {
            scrub: 2
        })
    });
    NewTimeline.from("#mainContainer #starAnimation2", {
        rotate: -360,
        duration: 1,
        yoyo: true,
        scrollTrigger: ("main", {
            scrub: 2,
        })
    });

}

textPinAnimation()


function textPinAnimation() {
    var tlTextAni = gsap.timeline()
    gsap.to("#parent1 h2", {
        transform: "translateX(-80%)",
        rotate: -20,
        scrollTrigger: {

            trigger: "#parent1",
            scroller: "body",
            scrub: 3,
            pin: true,
        }
    })
    gsap.to("#parent2 h2", {
        transform: "translateX(-80%)",
        rotate: 20,
        scrollTrigger: {
            trigger: "#parent2",
            scroller: "body",
            scrub: 3,
            pin: true,
        }
    })
    gsap.to("#parent3 h2", {
        delay: 0.5,
        transform: "translateX(-90%)",
        scrollTrigger: {
            trigger: "#parent3",
            scroller: "body",
            scrub: 3,
            pin: true,

        }
    })



}



// Selecting elements correctly
var Days = document.getElementById("days");
var Hours = document.getElementById("hours"); // Fixed ID casing
var Minutes = document.getElementById("minutes");
var Seconds = document.getElementById("seconds");

function updateCountdown() {
    const targetDate = new Date("April 14, 2025 08:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById("timer").innerText = "00d 00h 00m 00s";
        clearInterval(countdownInterval); // Stop countdown when time is up
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Ensuring leading zeros (01 instead of 1)
    const format = (num) => (num < 10 ? `0${num}` : num);

    if (Days && Hours && Minutes && Seconds) {
        Days.innerHTML = format(days);
        Hours.innerHTML = format(hours);
        Minutes.innerHTML = format(minutes);
        Seconds.innerHTML = format(seconds);
    }
}
// Run every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); 
