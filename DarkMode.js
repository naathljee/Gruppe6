const toggleButton = document.getElementById('darkModeToggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('main').classList.toggle('dark-mode');
    document.getElementById('title-collage').classList.toggle('dark-mode');
    document.getElementById('text-collage').classList.toggle('dark-mode');
});
