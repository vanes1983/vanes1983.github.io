(function() {
    // Функция настройки автовоспроизведения для одного видео
    function setupAutoplayVideo(video) {
        // Функция попытки воспроизведения
        function tryPlay() {
            if (!video.paused) return;
            const playPromise = video.play();
            if (playPromise && typeof playPromise.then === 'function') {
                playPromise
                    .then(() => {
                        // Если воспроизведение успешно, останавливаем интервал
                        if (interval) clearInterval(interval);
                    })
                    .catch(() => {});
            }
        }

        // События загрузки видео
        video.addEventListener('loadeddata', tryPlay);
        video.addEventListener('canplay', tryPlay);
        video.addEventListener('canplaythrough', tryPlay);

        // Интервал для надёжности (повторяем попытки, пока видео не заиграет)
        const interval = setInterval(() => {
            if (video.paused) tryPlay(); else clearInterval(interval);
        }, 200);

        // Повтор при возвращении на вкладку
        const visibilityHandler = () => {
            if (!document.hidden) tryPlay();
        };
        document.addEventListener('visibilitychange', visibilityHandler);

        // Очистка обработчиков при необходимости (можно добавить, но обычно не требуется)
        // Для простоты не добавляем удаление, т.к. видео обычно живут всю страницу.
    }

    // Находим все видео с классом autoplayvideo и применяем к ним настройку
    const videos = document.querySelectorAll('video.autoplayvideo');
    videos.forEach(setupAutoplayVideo);

    // Блокировка нежелательных действий (оставляем как в оригинале, глобально)
    const touchEvents = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
    touchEvents.forEach(evt => document.addEventListener(evt, e => {}, { passive: true, capture: true }));
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('selectstart', e => e.preventDefault());
    // Предотвращаем перетаскивание всех видео (можно оставить или уточнить)
    document.querySelectorAll('video').forEach(v => v.addEventListener('dragstart', e => e.preventDefault()));
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