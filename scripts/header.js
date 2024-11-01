const burger = document.querySelector(".header__burger");
const headerPosition = document.querySelector(".header__position");
const topBar = document.querySelector(".header__top-bar");
const navContainer = document.querySelector(".header__nav-container");
const social = document.querySelector(".social");
const navLinks = document.querySelectorAll(".nav__link");
const body = document.body;
const heroSection = document.querySelector(".header__hero");

function toggleMenu() {
    burger.classList.toggle("open");
    headerPosition.classList.toggle("header__position--active");
    topBar.classList.toggle("header__top-bar--active");
    navContainer.classList.toggle("header__nav-container--active");
    social.classList.toggle("social--active");
    if (burger.classList.contains("open")) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "";
    }
}

if (burger) {
    burger.addEventListener("click", toggleMenu);
}

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetSection = link.getAttribute("href"); // Отримуємо якорь, наприклад "#headphones"

        if (window.location.pathname.includes("product.html")) {
            // Якщо ми на сторінці product.html
            event.preventDefault();
            if (window.innerWidth <= 990) {
                // Для екранів до 990 пікселів — закриваємо меню і переходимо на index.html з якорем
                toggleMenu();
                body.style.overflow = ""; // Зберігаємо можливість прокручування після закриття меню
                window.location.href = `index.html${targetSection}`;
            } else {
                // Для екранів від 991 пікселів і більше — просто переходимо на index.html з якорем
                window.location.href = `index.html${targetSection}`;
            }
        } else if (window.location.pathname.includes("index.html")) {
            // Якщо ми на сторінці index.html
            if (window.innerWidth <= 990) {
                // Для екранів до 990 пікселів
                event.preventDefault();
                toggleMenu();
                body.style.overflow = ""; // Повертаємо можливість прокручування
                const targetElement = document.querySelector(targetSection);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            } else {
                // Для екранів від 991 пікселів — просто прокручуємо до секції
                event.preventDefault();
                const targetElement = document.querySelector(targetSection);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            }
        }
    });
});

// Перевірка на конкретну сторінку та встановлення правильного положення heroSection
window.addEventListener("load", () => {
    if (window.location.pathname.includes("product.html")) {
        // При переході на сторінку product.html ховаємо блок heroSection
        if (heroSection) {
            heroSection.style.display = "none";
        }
        headerPosition.style.position = "relative";
    } else if (window.location.pathname.includes("index.html")) {
        if (heroSection) {
            heroSection.style.display = "flex";
        }
        headerPosition.style.position = "absolute";

        // Виконуємо прокручування до потрібної секції, якщо є якорь в URL
        const hash = window.location.hash; // Отримуємо якорь з URL
        if (hash) {
            setTimeout(() => {
                const targetElement = document.querySelector(hash);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" }); // Прокручуємо до потрібної секції
                }
            }, 100); // Невелика затримка, щоб переконатися, що всі елементи сторінки завантажилися
        }
    }
});
