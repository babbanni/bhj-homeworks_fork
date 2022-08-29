let font = Array.from(document.querySelectorAll('.font-size'));
let book = document.querySelector('.book');
let fontActive = element => element.className.includes('font-size_active');


font.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        let fontActiveIndex = font.findIndex(fontActive);

        if (!el.className.includes('font-size_active')) {
            font[fontActiveIndex].classList.remove('font-size_active');
            el.classList.add('font-size_active');
        }
        if (el.className.includes('font-size_small')) {
            book.classList.add('book_fs-small');
            if (book.className.includes('book_fs-big')) {
                book.classList.remove('book_fs-big');
            }
        } else if (el.className.includes('font-size_big')) {
            book.classList.add('book_fs-big');
            if (book.className.includes('book_fs-small')) {
                book.classList.remove('book_fs-small');
            }
        } else if (!el.className.includes('font-size_small') && !el.className.includes('font-size_big')) {
            book.className = 'book';
        }
    })
})