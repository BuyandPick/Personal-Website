document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
        themeToggle.textContent = "☀️ Light Mode";
    }

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-theme");
        const isDark = body.classList.contains("dark-theme");
        themeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });

    // QUOTE FUNCTION
    async function loadQuote() {
        const quoteElement = document.getElementById("quote");
        if (!quoteElement) {
            console.warn("Quote element not found.");
            return;
        }

        try {
            const res = await fetch("https://api.quotable.io/random");
            const data = await res.json();
            quoteElement.textContent = `"${data.content}" — ${data.author}`;
        } catch (err) {
            quoteElement.textContent = "Could not load quote.";
        }
    }

    loadQuote(); // call once DOM is ready

    // SLIDESHOW
    const images = [
        "images/princess.jpeg",
        "images/Kleoagain.jpg",
        "images/kleoooo.jpg",
        "images/Kleothecat.jpg",
        "images/meowrr.jpeg",
        "images/weirdo.jpeg",
        "images/oddcat.jpeg",
        "images/rawr.jpeg",
        "images/shecansmellyou.jpeg",
        "images/aicat.jpeg",
        "images/kitty.jpeg"
    ];

    let currentIndex = 0;
    const slideImg = document.getElementById("slide");

    function showSlide(index) {
        if (slideImg) {
            slideImg.src = images[index];
        }
    }

    window.nextSlide = function () {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    };

    window.prevSlide = function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showSlide(currentIndex);
    };

    showSlide(currentIndex);
    setInterval(() => {
        nextSlide();
    }, 5000);
});
