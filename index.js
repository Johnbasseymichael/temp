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

// ACCODOIN HANDLER
document.querySelectorAll(".accordion-header").forEach((button) => {
    button.addEventListener("click", () => {
        const accordionContent = button.nextElementSibling;
        const isExpanded = button.getAttribute("aria-expanded") === "true";

        // Close all panels
        document.querySelectorAll(".accordion-header").forEach((header) => {
            header.setAttribute("aria-expanded", "false");
            header.nextElementSibling.classList.remove("active");
        });

        // If the clicked panel wasn't expanded, expand it
        if (!isExpanded) {
            button.setAttribute("aria-expanded", "true");
            accordionContent.classList.add("active");
        }
    });
});


// AirDatepicker
document.addEventListener("DOMContentLoaded", function () {
    new AirDatepicker("#datepicker", {
        inline: true,
        locale: {
            days: [
                "Zondag",
                "Maandag",
                "Dinsdag",
                "Woensdag",
                "Donderdag",
                "Vrijdag",
                "Zaterdag",
            ],
            daysShort: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
            daysMin: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
            months: [
                "Januari",
                "Februari",
                "Maart",
                "April",
                "Mei",
                "Juni",
                "Juli",
                "Augustus",
                "September",
                "Oktober",
                "November",
                "December",
            ],
            monthsShort: [
                "Jan",
                "Feb",
                "Mrt",
                "Apr",
                "Mei",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Okt",
                "Nov",
                "Dec",
            ],
            today: "Vandaag",
            clear: "Wissen",
            dateFormat: "dd-MM-yyyy",
            firstDay: 1,
        },
    });
});