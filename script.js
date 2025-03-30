document.addEventListener('DOMContentLoaded', function () {
    // Placeholder for future JavaScript functionality
    LoaderProgressBar()
});

var tl = gsap.timeline()
var tl2 = gsap.timeline()
var tl3 = gsap.timeline()


let mundanTxt = "Mundan, yaani pehli baar baal kaatna, ek bahut hi mahatvapurn Hindu sanskar hai jo chhoti umar ke bachchon ka sir mundvane ke roop me manaya jata hai. Yeh paramparaik vidhi Hindu dharm me shuddhi aur sanskari jeevan ki shuruaat ka pratik mana jata hai."

let splitMundanTxt = mundanTxt.split(" ")
let mundanDescp = document.getElementById("mundanDescp")
splitMundanTxt.forEach(element => {
    let newSpanEle = document.createElement("span")
    newSpanEle.innerHTML = element + " "
    mundanDescp.appendChild(newSpanEle)

})


// Gallery Text
galleryText = "Gallery"
galtxt = document.getElementById("galleryText")
splitGaltxt = galleryText.split("")
splitGaltxt.forEach(elem => {
    span = document.createElement("span")
    span.innerHTML = elem

    galtxt.appendChild(span)
})







gsap.registerPlugin(ScrollTrigger)



function textMundaAnimation() {
    gsap.from("#mundanDescp span", {
        opacity: 0, y: 20, stagger: 0.3, duration: 1, scrollTrigger: (".mundaDescp", {
            scrub: true

        })
    });
    gsap.from("#mainContainer #starAnimation", {
        rotate: 360,
        duration: 2,
        scrollTrigger: ("main", {
            scrub: true
        })
    });

}

function LoaderProgressBar() {
    tl2.from("#kkm", {
        duration: 1.5,
        width: 0,
        ease: "back.out(1.7)",
    })
    tl2.to("#kkm h1", {
        delay: 0.5,
        duration: 1,
        color: "yellow",
    })
    tl2.to("#progress-bar", {
        delay: 0,
        width: "100%",  // Progress bar full hone tak badhega
        duration: 3,    // 3 seconds me complete hoga
        ease: "power2.out" // Smooth easing effect
    });
    tl2.to("#clickAnyWhere", {
        duration: 0.5,
        opacity: 1,
        y: 5,
        repeat: -1,
        yoyo: true,
    })
}

function LoaderAnimation() {


    tl.to("#Loader", {
        delay: 0.5,
        duration: 2,
        ease: Power2.easeOut,
        y: "-100%",
        onComplete() {
            var main = document.getElementById("mainContainer")
            main.style.display = "flex";
        }
    }


    )
    tl.from("#mainContainer", {
        duration: 0.5,
        opacity: 1,
        onComplete() {
            textMundaAnimation()
        }
    })


}


// jab pin property ko use karenge tab hum humaesh trigger karenge parent ko 
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
textPinAnimation()



window.addEventListener("click", function () {
    LoaderAnimation()

});

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
