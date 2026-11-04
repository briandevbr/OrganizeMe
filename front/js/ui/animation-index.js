const cards = document.querySelectorAll('.plano-card');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
             if (entry.isIntersecting) {
                    entry.target.classList.add('visivel');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        cards.forEach((card) => observer.observe(card));