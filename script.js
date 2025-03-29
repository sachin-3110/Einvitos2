document.addEventListener('DOMContentLoaded', function() {
    // Placeholder for future JavaScript functionality
    console.log('Mundan Ceremony website loaded');
}); 

var tl=gsap.timeline()
var tl2=gsap.timeline()
tl2.from("#kkm",{
    duration:1.5,
    width:0,
    ease: "back.out(1.7)",
})
tl2.to("#kkm h1",{
    delay:0.5,
    duration:1,
    color:"yellow",
})
tl2.to("#progress-bar", {
    delay:0, 
    width: "100%",  // Progress bar full hone tak badhega
    duration: 3,    // 3 seconds me complete hoga
    ease: "power2.out" // Smooth easing effect
});
tl2.to("#clickAnyWhere",{
    duration:0.5,
    opacity:1,
    y:5,
    repeat:-1,
    yoyo:true,
})
// window.addEventListener("onclick",LoaderAnimation())
function LoaderAnimation(){

  
    tl.to("#Loader",{
        delay:0.5,
        duration:4,
        ease: Power2.easeOut,
         y:-1000,  
         
        }
     
     )
}

window.addEventListener("click", function () {
    LoaderAnimation()

});