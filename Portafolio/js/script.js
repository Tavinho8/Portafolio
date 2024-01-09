// cambios en el body de modo oscuro a claro y viceversa
//-----------------------------------------------------------   

let toggleTheme = document.getElementById('toggle-theme'),
    toggleIcon = document.getElementById('toggle-icon'),
    toggleText = document.getElementById('toggle-text');

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    // este if va hacer los cambios en el icono y texto
    if (toggleIcon.src.includes('moon.svg')) {
        toggleIcon.src = 'icons/sun.svg';
        toggleText.src = 'Light Mode';
    } else {
        toggleIcon.src = 'icons/moon.svg';
        toggleText.src = 'Dark Mode';
    }
});

// Haciendo el cambio de colores azul, verde, morado y naranja
let toggleColors = document.getElementById('toggle-colors'),
    rootStyles = document.documentElement.style;

toggleColors.addEventListener('click', (e) => {
    rootStyles.setProperty('--primary-color', e.target.dataset.color);
});


// haciendo el multi-idioma

const flagsElement = document.getElementById('flags');
const textsToChange = document.querySelectorAll('[data-section]');

const changeLanguage = async (language) =>{
    const requestJson = await fetch(`/languages/${language}.json`);
    const texts = await requestJson.json();
    
    for(const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
};


flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});