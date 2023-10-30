window.addEventListener('storage', function(event) {
    if (event.key === 'parameters4') {
        const parameters = JSON.parse(event.newValue);
        const loopValue = parameters.loop;

        document.getElementById('loop-value').textContent = loopValue + ' voltas';

        const statusElement = document.querySelector('.status-label-4');
        const statusContainer = statusElement.parentElement;
        if (loopValue > 0) {
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
