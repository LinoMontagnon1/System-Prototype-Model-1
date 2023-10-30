window.addEventListener('storage', function(event) {
    if (event.key === 'nfValue') {
        const nfValue = event.newValue;
        document.getElementById('mesa-value').textContent = nfValue + ' passos';

        const statusElement = document.querySelector('.status-label-2');
        const statusContainer = statusElement.parentElement;
        if (nfValue > 0) {
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
