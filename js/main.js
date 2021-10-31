// Menu Button
const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.navbar');

menuBtn.addEventListener('click', function () {
    navBar.classList.toggle('show');
});

// FAQ Accordion
const faqItem = document.querySelectorAll('.faq-item');

for (let i = 0; i < faqItem.length; i++) {
    faqItem[i].addEventListener('click', function () {
        this.classList.toggle('trigger');
    });
}
