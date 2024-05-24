document.addEventListener('DOMContentLoaded', function() {
    // Code pour le bouton de bascule du mode sombre
    const htmlElement = document.documentElement;
    let darkMode = localStorage.getItem('darkMode') === 'true';

    const setupDarkModeToggle = () => {
        const btnToggle = document.getElementById('toggle-dark-mode');
        const img = btnToggle.querySelector('img');
        const darkModeToggleWrapper = document.querySelector('.dark-mode-toggle-wrapper');

        if (darkMode) {
            htmlElement.classList.add('dark-mode');
            img.src = 'public/img/mode-sombre/Vector2.png';
            darkModeToggleWrapper.classList.add('dark-mode');
        }

        btnToggle.addEventListener('click', () => {
            darkMode = !darkMode;
            localStorage.setItem('darkMode', darkMode);

            if (darkMode) {
                img.src = 'public/img/mode-sombre/Vector2.png';
                htmlElement.classList.add('dark-mode');
                darkModeToggleWrapper.classList.add('dark-mode');
            } else {
                img.src = 'public/img/mode-sombre/Vector.svg';
                htmlElement.classList.remove('dark-mode');
                darkModeToggleWrapper.classList.remove('dark-mode');
            }
        });
    };

    setupDarkModeToggle();

    // Code pour le bouton de bascule de langue
    const toggleLanguageButton = document.getElementById('toggle-language');
    const toggleLanguageImage = toggleLanguageButton.querySelector('img');
    const frElements = document.querySelectorAll('.fr');
    const enElements = document.querySelectorAll('.en');

    let isEnglish = localStorage.getItem('isEnglish') === 'true';

    function updateLanguage() {
        if (isEnglish) {
            frElements.forEach(element => element.style.display = 'none');
            enElements.forEach(element => element.style.display = 'block');
            toggleLanguageImage.src = 'public/img/langue/france.png';
        } else {
            enElements.forEach(element => element.style.display = 'none');
            frElements.forEach(element => element.style.display = 'block');
            toggleLanguageImage.src = 'public/img/langue/anglais.png';
        }
    }

    updateLanguage();

    toggleLanguageButton.addEventListener('click', function () {
        isEnglish = !isEnglish;
        localStorage.setItem('isEnglish', isEnglish);
        updateLanguage();

        toggleLanguageButton.classList.add('clicked');
        setTimeout(() => {
            toggleLanguageButton.classList.remove('clicked');
        }, 300);
    });

    
});
