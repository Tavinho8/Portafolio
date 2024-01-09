let colorModo = document.getElementById('color-mode'),
    icon = document.getElementById('icon');


colorModo.addEventListener('click', () => {
    const body = document.body;

    if (body.classList.contains('dark')) {
        // Si está en modo oscuro, cambiar a modo claro
        body.classList.remove('dark');
        // Cambiar íconos
        document.querySelector('.bi-moon-fill').style.display = 'block';
        document.querySelector('.bi-sun').style.display = 'none';
    } else {
        // Si está en modo claro, cambiar a modo oscuro
        body.classList.add('dark');
        // Cambiar íconos
        document.querySelector('.bi-moon-fill').style.display = 'none';
        document.querySelector('.bi-sun').style.display = 'block';
    }
});