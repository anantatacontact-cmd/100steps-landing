// Intersection Observer for fade-up animations
document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('.step, .card, .section-title, .section-desc');
    targets.forEach(el => el.classList.add('fade-up'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    targets.forEach(el => observer.observe(el));
});
