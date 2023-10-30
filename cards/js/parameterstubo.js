window.addEventListener('storage', function(event) {
    if (event.key === 'parameters') {
        const parameters = JSON.parse(event.newValue);

        if (parameters) {
            document.querySelector('.param-value-1-1').textContent = parameters.delay + ' ms';
            document.querySelector('.param-value-1-2').textContent = parameters.offTime + ' ms';
            document.querySelector('.param-value-1-3').textContent = parameters.coolingTime + ' ms';

            const statusElement = document.querySelector('.status-label-1');
            const statusContainer = statusElement.parentElement;
            if (parameters.delay > 0 || parameters.offTime > 0 || parameters.coolingTime > 0) {
                statusElement.textContent = 'Ativo';
                statusContainer.classList.remove('inactive');
                statusContainer.classList.add('active');
            } else {
                statusElement.textContent = 'Inativo';
                statusContainer.classList.remove('active');
                statusContainer.classList.add('inactive');
            }
        }
    }
});
