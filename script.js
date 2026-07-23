// ================================
// MOBILE MENU
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    });

});


// // ================================
// // STICKY HEADER
// // ================================

// const header = document.querySelector("header");

// window.addEventListener("scroll", () => {

//     if (window.scrollY > 50) {

//         header.style.background = "rgba(15,23,42,.95)";
//         header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

//     } else {

//         header.style.background = "rgba(15,23,42,.85)";
//         header.style.boxShadow = "none";

//     }

// });


// ================================
// SCROLL TO TOP
// ================================

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopBtn.style.display = "flex";

    } else {

        scrollTopBtn.style.display = "none";

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ================================
// ACTIVE NAVIGATION
// ================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ================================
// COUNTER ANIMATION
// ================================

const counters = document.querySelectorAll(".counter");

const speed = 100;

const startCounter = () => {

    counters.forEach(counter => {

        const update = () => {

            const target = +counter.getAttribute("data-target");

            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {

                counter.innerText = Math.ceil(count + increment);

                setTimeout(update, 20);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter();

            observer.disconnect();

        }

    });

});

const statsSection = document.querySelector(".stats");

if (statsSection) {

    observer.observe(statsSection);

}


// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ================================
// AOS INITIALIZE
// ================================

AOS.init({

    duration: 1000,

    once: true,

    offset: 100

});


// ================================
// PRELOADER (Optional)
// ================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// ================================
// IMAGE HOVER EFFECT
// ================================

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.06) rotate(1deg)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1) rotate(0deg)";

    });

});


// ================================
// BUTTON RIPPLE
// ================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mousemove", e => {

        const x = e.offsetX;
        const y = e.offsetY;

        button.style.setProperty("--x", x + "px");
        button.style.setProperty("--y", y + "px");

    });

});


// ==========================
// Video Hover Play with Sound
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const videos = document.querySelectorAll(".video-card video");

    videos.forEach(video => {

        const card = video.closest(".video-card");

        // Hover → play muted
        card.addEventListener("mouseenter", () => {
            video.muted = true;
            video.play();
        });

        // Click → unmute
        card.addEventListener("click", () => {
            video.muted = false;
        });

        // Leave → pause and reset
        card.addEventListener("mouseleave", () => {
            video.pause();
            video.currentTime = 0;
            video.muted = true;
        });

    });

});

// ================================
// EMAILJS CONTACT FORM
// ================================

emailjs.init("d7r79yVy_MoxT6l0I");

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const submitBtn = contactForm.querySelector("button");

        submitBtn.disabled = true;
        submitBtn.innerHTML = "Sending...";

        emailjs.sendForm(
            "service_a1x628h",
            "template_oto7xxk",
            this
        )
        .then(() => {

            alert("✅ Message sent successfully!");

            contactForm.reset();

        })
        .catch((error) => {

            console.error(error);

            alert("❌ Failed to send the message. Please try again.");

        })
        .finally(() => {

            submitBtn.disabled = false;
            submitBtn.innerHTML = "Send Message";

        });

    });

}