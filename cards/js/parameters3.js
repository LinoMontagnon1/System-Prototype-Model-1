let zAxisEnabled = 0;

function toggleElement3(elementId) {
    const element = document.querySelector(`[data-id="${elementId}"]`);
    const circle = element.querySelector('.circle');

    if (activeElements.has(elementId)) {
        activeElements.delete(elementId);
        circle.classList.remove('circle-active');
        circle.classList.add('circle-inactive');
        zAxisEnabled = 0;
    } else {
        activeElements.add(elementId);
        circle.classList.remove('circle-inactive');
        circle.classList.add('circle-active');
        zAxisEnabled = 1;
    }
}

function saveParameters3() {
    let directionElement = document.querySelector('.rotation-button.up');
    let directionz = directionElement && directionElement.classList.contains('active') ? 'up' : 'down';

    let rotationElement = document.querySelector('.rotation-speed .active');
    let rotationz = rotationElement ? rotationElement.innerText : 'default value';

    let nfz = Number(document.getElementById('delay-input').value);

    const parameters = {
        'zAxisEnabled': zAxisEnabled,
        'directionZ': directionz,
        'rotationZ': rotationz,
        'nFZ': nfz
    };

    const delayInputValue = document.getElementById('delay-input').value;
    localStorage.setItem('delayInputValue', delayInputValue);

    // console.log(JSON.stringify(parameters));
    sessionStorage.setItem('parameters3', JSON.stringify(parameters));

}
