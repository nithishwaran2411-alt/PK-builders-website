/* ============================================================
   1. STICKY HEADER (Hide on scroll down, show on scroll up)
============================================================ */
let lastScroll = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 80) {
        header.style.transform = "translateY(-100%)";
    } else {
        header.style.transform = "translateY(0)";
    }

    lastScroll = currentScroll;
});


/* ============================================================
   2. HERO IMAGE CAROUSEL
============================================================ */
function changeImage(imgElement) {
    document.getElementById("mainHero").src = imgElement.src;
}


/* ============================================================
   3. FAQ ACCORDION
============================================================ */
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    item.addEventListener("click", () => {
        const answer = item.querySelector(".faq-answer");

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");
            answer.style.display = "block";
        }
    });
});


/* ============================================================
   4. CONTACT MODAL
============================================================ */
const modal = document.getElementById("modal");
const contactBtn = document.getElementById("contactBtn");
const closeModal = document.getElementById("closeModal");

contactBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


/* ============================================================
   5. PROJECT SLIDER
============================================================ */
const appTrack = document.getElementById("appTrack");
const appPrev = document.getElementById("appPrev");
const appNext = document.getElementById("appNext");

const scrollAmount = 280;

appNext.addEventListener("click", () => {
    appTrack.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

appPrev.addEventListener("click", () => {
    appTrack.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});


/* ============================================================
   6. SMOOTH SCROLLING FOR NAV LINKS
============================================================ */
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth",
            });
        }
    });
});