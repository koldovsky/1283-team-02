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
                // Для екранів до 990 пікселів — закриваємо меню і переходимо на іншу сторінку з якорем
                toggleMenu();
                setTimeout(() => {
                    body.style.overflow = ""; // Повертаємо можливість прокручування після закриття меню
                    window.location.href = `index.html${targetSection}`;
                }, 300);
            } else {
                // Для екранів від 991 пікселів і більше — просто переходимо на index.html з якорем
                window.location.href = `index.html${targetSection}`;
            }
        } else {
            // Для будь-якої іншої сторінки (універсальний випадок)
            if (window.innerWidth <= 990) {
                // Для екранів до 990 пікселів
                event.preventDefault();
                toggleMenu();
                const targetElement = document.querySelector(targetSection);
                if (targetElement) {
                    setTimeout(() => {
                        targetElement.scrollIntoView({ behavior: "smooth" });
                    }, 300); // Затримка, щоб дати можливість меню закритися перед прокруткою
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
function updateHeroSection() {
    if (window.location.pathname.includes("product.html")) {
        // Якщо ми на сторінці product.html, ховаємо блок heroSection
        if (heroSection) {
            heroSection.style.display = "none";
        }
        headerPosition.style.position = "relative";
    } else {
        // Якщо ми на будь-якій іншій сторінці, відображаємо блок heroSection
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
}

// Викликаємо при завантаженні сторінки
window.addEventListener("load", updateHeroSection);

// Викликаємо при зміні URL (щоб реагувати на переходи)
window.addEventListener("popstate", updateHeroSection);
window.addEventListener("hashchange", updateHeroSection);
