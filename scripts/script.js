document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault(); 

    alert("Obrigado por entrar em contato! Retornaremos em breve.");

    form.reset(); 
});