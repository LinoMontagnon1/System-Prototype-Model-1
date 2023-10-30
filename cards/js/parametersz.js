window.addEventListener('storage', function(event) {
    if (event.key === 'delayInputValue') {
        const delayInputValue = event.newValue;
        document.getElementById('delay-value').textContent = delayInputValue + ' passos';

        const statusElement = document.querySelector('.status-label-3');
        const statusContainer = statusElement.parentElement;
        if (delayInputValue > 0) {
            statusElement.textContent = 'Ativo';
            statusContainer.classList.remove('inactive');
            statusContainer.classList.add('active');
        } else {
            statusElement.textContent = 'Inativo';
            statusContainer.classList.remove('active');
            statusContainer.classList.add('inactive');
        }
    }
});
