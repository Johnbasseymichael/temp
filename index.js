// document.addEventListener("DOMContentLoaded", function () {
//     var calendarEl = document.getElementById("calendar");
//     var calendar = new FullCalendar.Calendar(calendarEl, {
//         initialView: "dayGridMonth",
//     });
//     calendar.render();
// });

// banner swiper
const swiper = new Swiper(".swiper", {
    slidesPerView: 2.2,
    spaceBetween: 10,
    centeredSlides: false,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// navbar handler
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
    // Close menu when clicking on a link
    document.querySelectorAll(".nav-item").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");
        });
    });
});
