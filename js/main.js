"use strict"
window.onload = function () {

/******************** VARIABLES  ********************/ 

politeInit();   

function politeInit(){      
    //      console.log = function() {}
            
            var select = function(s) {
                    return document.querySelector(s);
                },
                selectAll = function(s) {
                    return document.querySelectorAll(s);
                },
                wrapper = select('#wrapper'),
                wrect = select('#wrect'),
                playerWrap = select('#playerWrap'),
                logo = select('#logo'),
                body = select('body'),
                contact = select('#contact'),
                introVideo = select('#introVideo'),
                blueCircle = select('#blueCircle'),
                introText1 = selectAll('.introText1'),
                introText2 = selectAll('.introText2'),
                imgs = selectAll('.img'),
                headlinesArr = [],
    
                tl = gsap.timeline();

                animate();

/***************** //end of VARIABLES  *****************/

/******************  MAIN ANIMATION  ******************/ 
function animate() {
    const logoSplit = new SplitText(logo, {type:"words, chars"})
    const introTextSplit1 = new SplitText(introText1, {type:"words, chars"})
    const introTextSplit2 = new SplitText(introText2, {type:"words, chars"})

    tl
    //frame1
    .set(body, {alpha: 1}, "<")
    .set(logoSplit.chars, {rotationY: 180, force3D: true, alpha: 0, y: 20}, "<")
    .set(introTextSplit1.chars, {rotationY: 180, force3D: true, alpha: 0, y: 20}, "<")
    .set(introTextSplit2.chars, {rotationY: 180, force3D: true, alpha: 0, y: 20}, "<")
    .to(introVideo, {duration: 0.25, alpha: 0, ease:"none", display: 'none'}, ">2.5")
    .from(blueCircle, {duration: 0.25, alpha: 0, ease:"none"}, ">")
    .to(logoSplit.chars, {duration: 0.25, stagger: 0.02, alpha: 1, y: 0, ease:"power4.inOut"}, ">1.0")
    .to(logoSplit.chars, {duration: 0.25, stagger: 0.02, rotationY: 360, force3D: true, ease:"power4.inOut"}, ">")

    .from(contact, {duration: 0.5, scale: 0, ease:"back.out(2.2)"}, ">")

    .from(playerWrap, {duration: 0.5, alpha: 0, ease:"none"}, ">")

    .to(introTextSplit1.chars, {duration: 0.25, stagger: 0.02, alpha: 1, y: 0, ease:"power4.inOut"}, ">")
    .to(introTextSplit1.chars, {duration: 0.25, stagger: 0.02, rotationY: 360, force3D: true, ease:"power4.inOut"}, ">-0.5")

    .to(introTextSplit2.chars, {duration: 0.25, stagger: 0.02, alpha: 1, y: 0, ease:"power4.inOut"}, ">")
    .to(introTextSplit2.chars, {duration: 0.25, stagger: 0.02, rotationY: 360, force3D: true, ease:"power4.inOut"}, ">-0.5")

}
/******************  //end of MAIN ANIMATION  ******************/ 

/******************  Hover animations  ******************/ 
var contactHoverOn = new TimelineMax({});
var contactHoverOff = new TimelineMax({});
contactHoverOn.to("#contact", { backgroundImage: 'url(../img/contact-icon-hover.svg)', ease:"power2.InOut", alpha: 1, duration: 0.25 });
contactHoverOff.to("#contact", { backgroundImage: 'url(../img/contact-icon.svg)', ease:"power2.InOut", alpha: 1, duration: 0.25 });

document.querySelector("#contact").addEventListener("mouseenter", hoverAnimationON);
function hoverAnimationON() {
  if (!contactHoverOn.isActive()) {
    contactHoverOn.play(0);
  }
}

document.querySelector("#contact").addEventListener("mouseleave", hoverAnimationOFF);
function hoverAnimationOFF() {
    if (!contactHoverOff.isActive()) {
        contactHoverOff.play(0);
    }
  }
/******************  //end of Hover animations  ******************/ 


};
}

/******************  TOOL TIP  ******************/ 
var tooltipSpan1 = document.getElementById('tooltip-span1');
var tooltipSpan2 = document.getElementById('tooltip-span2');
var tooltipSpan3 = document.getElementById('tooltip-span3');
var tooltipSpan4 = document.getElementById('tooltip-span4');

window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    // tooltipSpan1.style.top = (y + -200) + 'px';
    // tooltipSpan1.style.left = (x + 20) + 'px';

    //   tooltipSpan2.style.top = (y + -200) + 'px';
    // tooltipSpan2.style.left = (x + 20) + 'px';

    //   tooltipSpan3.style.top = (y + -200) + 'px';
    // tooltipSpan3.style.left = (x + 20) + 'px';

    //   tooltipSpan4.style.top = (y + -200) + 'px';
    // tooltipSpan4.style.left = (x + 20) + 'px';

};

var tooltipSpan2 = document.getElementById('tooltip-span2');
/******************  //end of TOOL TIP  ******************/ 