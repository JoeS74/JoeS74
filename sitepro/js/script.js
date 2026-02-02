console.log('script loaded');
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mainNav = document.getElementById('main-nav');

    if (mobileMenu && mainNav) {
        mobileMenu.addEventListener('click', function() {
            mainNav.classList.toggle('nav-open');
            mobileMenu.classList.toggle('open');
        });
    }
});