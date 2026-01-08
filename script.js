const form = document.querySelector('.contact-container form');
const message = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    message.style.display = "block";
    form.reset();
});

