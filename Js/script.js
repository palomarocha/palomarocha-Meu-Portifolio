const button = document.getElementById('button-language');
let currentLang = 'en';

button.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'pt' : 'en';

    fetch('./lang.json')
        .then(response => response.json())
        .then(data => {
            const lang = currentLang;

            document.querySelector('.container h1').textContent = data[lang].homeTitle;
            document.querySelector('.container p').textContent = data[lang].homeDescription;
            document.getElementById('cv').textContent = data[lang].downloadCV;
            document.querySelector('#project h2').textContent = data[lang].projectsTitle;
            document.querySelectorAll('.itens')[0].querySelector('h3').textContent = data[lang].project1Title;
            document.querySelectorAll('.itens')[0].querySelector('p').textContent = data[lang].project1Description;
            document.querySelectorAll('.itens')[1].querySelector('h3').textContent = data[lang].project2Title;
            document.querySelectorAll('.itens')[1].querySelector('p').textContent = data[lang].project2Description;
            document.querySelectorAll('.itens')[2].querySelector('h3').textContent = data[lang].project3Title;
            document.querySelectorAll('.itens')[2].querySelector('p').textContent = data[lang].project3Description;
            document.querySelector('#contact h3').textContent = data[lang].contactTitle;

            document.getElementById('cv').setAttribute('onclick', `baixarCV('${lang}')`);

            button.innerHTML = `
                <svg class="icon-globe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c5.514 0 10-4.486 10-10S17.514 2 12 2zm6.93 6h-2.816a12.812 12.812 0 00-1.307-3.354A8.024 8.024 0 0118.93 8zM12 4c.978 1.169 1.801 2.716 2.33 4H9.67C10.199 6.716 11.022 5.169 12 4zM4.07 8a8.024 8.024 0 013.123-3.354A12.812 12.812 0 005.886 8H4.07zM4 12c0-.688.07-1.36.202-2h3.24a17.343 17.343 0 000 4H4.202A7.978 7.978 0 014 12zm.07 4h1.816a12.812 12.812 0 001.307 3.354A8.024 8.024 0 014.07 16zM12 20c-.978-1.169-1.801-2.716-2.33-4h4.66C13.801 17.284 12.978 18.831 12 20zm-2.796-6a15.374 15.374 0 010-4h5.592a15.374 15.374 0 010 4H9.204zM16.807 19.354A12.812 12.812 0 0018.114 16h1.816a8.024 8.024 0 01-3.123 3.354zM19.798 14h-3.24a17.343 17.343 0 000-4h3.24c.132.64.202 1.312.202 2s-.07 1.36-.202 2z"/>
                </svg>
                ${data[lang].englishBtn}
            `;
        });
});

function baixarCV(lang) {
    const arquivos = {
        pt: './docs/CV-Paloma-Rocha-PT.pdf',
        en: './docs/CV-Paloma-Rocha-EN.pdf'
    };

    const link = document.createElement('a');
    link.href = arquivos[lang];
    link.download = arquivos[lang].split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const sections = document.querySelectorAll('section');

function mostrarSection() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', mostrarSection);
window.addEventListener('load', mostrarSection);
window.addEventListener('resize', mostrarSection);
