const form = document.querySelector('.contact-container form');
const message = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    message.style.display = "block";
    form.reset();
});


const cards = document.querySelectorAll('.cards');
const buttons = document.querySelectorAll('.projects-filters button');

buttons.forEach(button => {
    button.addEventListener('click', function (event) {
        const category = this.textContent.toLowerCase();
        filterProjects(category, event);
    });
});

function filterProjects(category, event) {

    buttons.forEach(btn => btn.classList.remove('active'));

    event.target.classList.add('active');
    console.log(event.target)

    cards.forEach(card => {
        const tags = card.querySelectorAll('.tags');
        const categories = Array.from(tags).map(tag => tag.textContent.toLowerCase());

        if (category === 'all') {
            card.style.display = 'flex';
        } else { card.style.display = categories.includes(category) ? 'flex' : 'none'; }
    });

};