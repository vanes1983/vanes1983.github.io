(function() {
    const video = document.getElementById('bgVideo');
    // Функция попытки воспроизведения
    function tryPlay() {
        if (!video.paused) return;
        var p = video.play();
        if (p && typeof p.then === 'function') {
            p.then(() => clearInterval(interval)).catch(() => {});
        }
    }
    // События загрузки
    video.addEventListener('loadeddata', tryPlay);
    video.addEventListener('canplay', tryPlay);
    video.addEventListener('canplaythrough', tryPlay);
    // Интервал для надёжности
    const interval = setInterval(() => { if (video.paused) tryPlay(); else clearInterval(interval); }, 200);
    // Повтор при возвращении на вкладку
    document.addEventListener('visibilitychange', () => { if (!document.hidden) tryPlay(); });
    // Блокировка нежелательных действий
    var touchEvents = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
    touchEvents.forEach(evt => document.addEventListener(evt, e => {}, { passive: true, capture: true }));
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('selectstart', e => e.preventDefault());
    video.addEventListener('dragstart', e => e.preventDefault());
})();

function animateOnScroll() {
    const pages = document.querySelectorAll('.portfolio-page');
   
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight * 0.8 &&
            rect.bottom >= window.innerHeight * 0.2
        );
    }
   
    function updateVisibleElements() {
        pages.forEach((page) => {
            if (isElementInViewport(page)) {
                page.classList.add('visible');
            }
        });
    }
   
    updateVisibleElements();
   
    window.addEventListener('scroll', updateVisibleElements);
    window.addEventListener('resize', updateVisibleElements);
   
    const staggerItems = document.querySelectorAll('.stagger-item');
    staggerItems.forEach((item) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
    });
   
    if (pages.length > 0) {
        pages[0].classList.add('visible');
    }
}

document.addEventListener('DOMContentLoaded', animateOnScroll);

let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // scrolling down
        document.querySelector('.site-header').classList.add('hide');
    } else {
        // scrolling up
        document.querySelector('.site-header').classList.remove('hide');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});