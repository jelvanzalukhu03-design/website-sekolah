/* ===== STICKY NAVBAR ===== */

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }

});

/* ===== TYPING EFFECT ===== */

const text = "Sekolah unggul, kreatif, disiplin, dan siap kerja.";
const typingText = document.querySelector(".hero-content p");

typingText.innerHTML = "";

let index = 0;

function typingEffect(){

    if(index < text.length){

        typingText.innerHTML += text.charAt(index);

        index++;

        setTimeout(typingEffect, 50);

    }

}

typingEffect();

/* ===== SCROLL ANIMATION ===== */

const cards = document.querySelectorAll(".berita-card, .profil-img img, .kontak-info");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s ease";

    observer.observe(card);

});

/* ===== SMOOTH BUTTON EFFECT ===== */

const buttons = document.querySelectorAll(".btn-primary, .btn-whatsapp");

buttons.forEach((btn) => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});