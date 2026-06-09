/* =========================
   SETTINGS
========================= */

const correctPasscode = "NIGGA69";
window.addEventListener(
    "load",
    ()=>{

        document.body.classList.add(
            "loaded"
        );

    }
);
let currentSlide = 0;
document.body.style.overflow = "hidden";

/* =========================
   ELEMENTS
========================= */

const loginScreen =
document.getElementById("login-screen");

const mainSite =
document.getElementById("main-site");

const errorMessage =
document.getElementById("error-message");

const slides =
document.querySelectorAll(".photo-card");

const dots =
document.querySelectorAll(".dot");

const music =
document.getElementById("music");

const musicBtn =
document.getElementById("musicBtn");

/* =========================
   PASSCODE
========================= */

function checkPasscode(){

    const input =
    document.getElementById("passcode")
    .value
    .trim();

    if(input === correctPasscode){
        music.play()
.then(() => {
    console.log("Music started");
})
.catch(err => {
    console.log("Audio blocked:", err);
});


        loginScreen.classList.add("fade-out");
for(let i=0;i<25;i++){

    const confetti =
    document.createElement("div");

    confetti.innerHTML="🌸";

    confetti.style.position="fixed";
    confetti.style.left=
    Math.random()*100+"vw";

    confetti.style.top="-20px";

    confetti.style.fontSize="20px";

    confetti.style.zIndex="99999";

    document.body.appendChild(confetti);

setTimeout(()=>{
    confetti.remove();
},4000);

    confetti.animate(
    [
      {transform:"translateY(0)"},
      {transform:"translateY(110vh)"}
    ],
    {
      duration:4000,
      easing:"linear"
    });

}
setTimeout(()=>{

    loginScreen.style.display = "none";

    const intro =
    document.getElementById(
    "intro-screen"
    );

    intro.style.display = "flex";

    setTimeout(()=>{

        intro.style.opacity = "0";

        setTimeout(()=>{

            intro.style.display =
            "none";

mainSite.style.display =
"block";

const dock = document.querySelector(".glass-dock");
dock.style.display = "flex";
document.body.style.overflow =
"auto";

let fadeIn = setInterval(()=>{

    if(music.volume < 0.3){

        music.volume += 0.02;

    }else{

        clearInterval(fadeIn);

    }

},100);

showSlide(0);

        },1000);

    },1800);

},800);

    }else{

        errorMessage.classList.remove("show");

        void errorMessage.offsetWidth;

        errorMessage.classList.add("show");

        setTimeout(()=>{

            errorMessage.classList.remove("show");

        },2500);
    }
}

/* =========================
   SLIDES
========================= */

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active-slide");
    });

    dots.forEach(dot=>{
        dot.classList.remove("active-dot");
    });

    slides[index].classList.add("active-slide");

    if(dots[index]){
        dots[index].classList.add("active-dot");
    }

    currentSlide = index;

    /* Progress Bar */
    const progress =
    document.getElementById("progressFill");

    if(progress){
        progress.style.width =
        ((index + 1) / slides.length) * 100 + "%";
    }

    /* Counter */
    const counter =
    document.getElementById("slideCounter");

    if(counter){
        counter.textContent =
        (index + 1) + " / " + slides.length;
    }
}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

/* =========================
   DOT CLICKS
========================= */

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        showSlide(index);

    });

});

/* =========================
   AUTO SLIDESHOW
========================= */
/*
setInterval(()=>{

    if(mainSite.style.display === "block"){

        nextSlide();

    }

},12000);
*/
/* =========================
   MUSIC
========================= */

musicBtn.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        musicBtn.textContent =
        "❚❚Music";

    }else{

        music.pause();

        musicBtn.textContent =
        "▷Music";

    }

});


/* =========================
   ENTER KEY SUPPORT
========================= */

document
.getElementById("passcode")
.addEventListener("keypress",(e)=>{

    if(e.key === "Enter"){

        checkPasscode();

    }

});

/* =========================
   START
========================= */

showSlide(0);
/* =========================
   SCROLL REVEAL
========================= */

const reveals =
document.querySelectorAll(".reveal");

function revealOnScroll(){

    reveals.forEach(item=>{

        const top =
        item.getBoundingClientRect().top;

        const trigger =
        window.innerHeight - 100;

        if(top < trigger){

            item.classList.add("active");
        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();
/* =========================
   PHOTO LIGHTBOX
========================= */

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightboxImg");

const closeLightbox =
document.getElementById("closeLightbox");

const galleryImages =
document.querySelectorAll(
".polaroid img, .photo-card img"
);

galleryImages.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("show");

        lightboxImg.src = img.src;

    });

});

closeLightbox.addEventListener(
"click",
()=>{

    lightbox.classList.remove("show");

}
);

lightbox.addEventListener(
"click",
(e)=>{

    if(e.target === lightbox){

        lightbox.classList.remove("show");

    }

}
);
window.addEventListener("scroll",()=>{

    const y = window.scrollY;

    document.querySelector(
    ".petals"
    ).style.transform =
    `translateY(${y * 0.15}px)`;

});
/* =========================
   FLOATING DOCK
========================= */

const dockMusic =
document.getElementById("dockMusic");

const dockGallery =
document.getElementById("dockGallery");

const dockTop =
document.getElementById("dockTop");

/* Music */

dockMusic.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        dockMusic.textContent = "🔊";

    }else{

        music.pause();

        dockMusic.textContent = "🎵";

    }

});

/* Gallery */

dockGallery.addEventListener("click",()=>{

    document
    .querySelector(".gallery-section")
    .scrollIntoView({
        behavior:"smooth"
    });

});

/* Top */

dockTop.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
/* =========================
   3D PARALLAX GALLERY
========================= */

document.querySelectorAll(".polaroid")
.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateY =
        ((x / rect.width) - 0.5) * 20;

        const rotateX =
        ((y / rect.height) - 0.5) * -20;

        card.style.transform =
        `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.05)
        `;
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "rotateX(0deg) rotateY(0deg) scale(1)";
    });

});
document.querySelectorAll(".polaroid")
.forEach(card => {

    card.addEventListener("touchstart", () => {

        card.style.transform =
        "rotateX(8deg) rotateY(-8deg) scale(1.05)";
    });

    card.addEventListener("touchend", () => {

        card.style.transform =
        "rotateX(0deg) rotateY(0deg) scale(1)";
    });

});
document.querySelectorAll(".polaroid")
.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        card.style.setProperty(
            "--x",
            x + "px"
        );

        card.style.setProperty(
            "--y",
            y + "px"
        );

    });

});
/* =========================
   TOUCH PARTICLES
========================= */

const particleLayer =
document.getElementById("particles");

function createParticles(x,y){

    for(let i=0;i<2;i++){

        const p =
        document.createElement("div");

        p.classList.add(
        "touch-particle"
        );

        p.style.left = x + "px";
        p.style.top = y + "px";

        const angle =
        Math.random() * Math.PI * 2;

        const distance =
        40 + Math.random() * 60;

        p.style.setProperty(
            "--tx",
            Math.cos(angle) *
            distance + "px"
        );

        p.style.setProperty(
            "--ty",
            Math.sin(angle) *
            distance + "px"
        );

        particleLayer.appendChild(p);

        setTimeout(()=>{
            p.remove();
        },800);
    }
}

/* =========================
   DRAGGING PARTICLES
========================= */

let particleTrail = false;

/* Touch Start */

document.addEventListener(
"touchstart",
e=>{

    particleTrail = true;

    const touch =
    e.touches[0];

    createParticles(
        touch.clientX,
        touch.clientY
    );

}
);

/* Touch Move */

document.addEventListener(
"touchmove",
e=>{

    if(!particleTrail) return;

    const touch =
    e.touches[0];

    createParticles(
        touch.clientX,
        touch.clientY
    );

}
);

/* Touch End */

document.addEventListener(
"touchend",
()=>{

    particleTrail = false;

}
);

/* Mouse */

let mouseDown = false;

document.addEventListener(
"mousedown",
()=>{

    mouseDown = true;

}
);

document.addEventListener(
"mouseup",
()=>{

    mouseDown = false;

}
);

document.addEventListener(
"mousemove",
e=>{

    if(!mouseDown) return;

    createParticles(
        e.clientX,
        e.clientY
    );

}
);