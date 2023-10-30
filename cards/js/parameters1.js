let relayEnabled = 0;

function toggleElement1(elementId) {
    const element = document.querySelector(`[data-id="${elementId}"]`);
    const circle = element.querySelector('.circle');

    if (activeElements.has(elementId)) {
        activeElements.delete(elementId);
        circle.classList.remove('circle-active');
        circle.classList.add('circle-inactive');
        relayEnabled = 0;
    } else {
        activeElements.add(elementId);
        circle.classList.remove('circle-inactive');
        circle.classList.add('circle-active');
        relayEnabled = 1;
    }
}

function saveParameters1() {
    const delay = Number(document.getElementById('delay-input').value);
    const offTime = Number(document.getElementById('off-time-input').value);
    const coolingTime = Number(document.getElementById('cooling-time-input').value);

    const parameters = {
        relayEnabled,
        delay,
        offTime,
        coolingTime
    };

    localStorage.setItem('parameters', JSON.stringify(parameters));

    // console.log(JSON.stringify(parameters));

    sessionStorage.setItem('parameters1', JSON.stringify(parameters));
}
