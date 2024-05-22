document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const parallaxElements = document.querySelectorAll('.parallax img');
    const serviceItems = document.querySelectorAll('.service-item, #cv .btn, .form-group');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    serviceItems.forEach(item => {
        item.classList.add('hidden');
        observer.observe(item);
    });

    window.addEventListener('scroll', () => {
        parallaxElements.forEach(element => {
            let speed = element.getAttribute('data-speed');
            let yPos = -(window.scrollY * speed / 100);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const faders = document.querySelectorAll('.hidden');
    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Bouton Retour en haut
    const topBtn = document.getElementById('topBtn');

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    };

    topBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
document.addEventListener('DOMContentLoaded',function(){
    let currentIndex =0;
    const slides = document.querySelectorAll('.carousel .slide');

    function showNextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1)% slides.length;
        slides[currentIndex].classList.add('active')

        setInterval(showNextSlide,3000);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const homeSection = document.getElementById('home');
    const images = ['img/img/IMG-01.jpg', 'img/img/img01.jpg', 'img/img/IMG-05.jpg']; // Remplace avec les noms de tes images

    let currentIndex = 0;

    function changeBackground() {
        homeSection.style.backgroundImage = `url('img/${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackground, 5000); // Change d'image toutes les 5 secondes
});
const topBtn = document.getElementById('topBtn');

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    });

    topBtn.addEventListener('click', () => {
        document.body.scrollTop = 0; // Pour les anciens navigateurs
        document.documentElement.scrollTop = 0; // Pour les nouveaux navigateurs
    });