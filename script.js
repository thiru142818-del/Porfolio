/* =====================================================
   PORTFOLIO JAVASCRIPT
   ===================================================== */


/* =====================================================
   MOBILE MENU
   ===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close menu after clicking */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   SCROLL REVEAL
   ===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   BACK TO TOP
   ===================================================== */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================================================
   ACTIVE NAVIGATION
   ===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.style.color = "";

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.style.color = "#f5f7fb";

        }

    });

});


/* =====================================================
   IMAGE FALLBACK
   ===================================================== */

const profileImage =
    document.querySelector(".image-card img");


profileImage.addEventListener("error", () => {

    profileImage.style.display = "none";

    const card =
        document.querySelector(".image-card");

    card.style.background =
        "linear-gradient(135deg,#151c2c,#111827)";

    card.innerHTML += `
        <div style="
            position:absolute;
            inset:0;
            display:grid;
            place-items:center;
            text-align:center;
            padding:30px;
            color:#929aaa;
            font-size:14px;
            z-index:10;
        ">
            Add your image as<br>
            <strong style="color:#00d4ff">
                C:\Users\thiru\Desktop\portfolio\images\profile.jpg
            </strong>
        </div>
    `;

});


/* =====================================================
   CARD TILT EFFECT
   ===================================================== */

const cards =
    document.querySelectorAll(
        ".project-card, .skill-card, .cert-card"
    );


cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        if (window.innerWidth < 800) return;

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -2;

        const rotateY =
            ((x - centerX) / centerX) * 2;

        card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =====================================================
   YEAR
   ===================================================== */

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    copyright.textContent =
        `© ${new Date().getFullYear()} All Rights Reserved.`;

}