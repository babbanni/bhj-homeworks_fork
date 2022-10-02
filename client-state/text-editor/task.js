let textarea = document.getElementById('editor');

textarea.addEventListener('keyup', (e) => {
    localStorage.setItem('text', textarea.value);
})

let text = localStorage.getItem('text');
textarea.value = text;