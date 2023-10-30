document.querySelector('.button').addEventListener('click', function() {
    this.classList.add('animate');

    setTimeout(() => {
        this.classList.remove('animate');
    }, 800); 
});
