let DeskEnabled = 0;

function toggleElement2(elementId) {
    const element = document.querySelector(`[data-id="${elementId}"]`);
    const circle = element.querySelector('.circle');

    if (activeElements.has(elementId)) {
        activeElements.delete(elementId);
        circle.classList.remove('circle-active');
        circle.classList.add('circle-inactive');
        DeskEnabled = 0;
    } else {
        activeElements.add(elementId);
        circle.classList.remove('circle-inactive');
        circle.classList.add('circle-active');
        DeskEnabled = 1;
    }
}


function saveParameters2() {
    let directionElement = document.querySelector('.rotation-button.clockwise');
    let direction = directionElement && directionElement.classList.contains('active') ? 'clockwise' : 'anticlockwise';

    let rotationElement = document.querySelector('.rotation-speed .active');
    let rotation = rotationElement ? rotationElement.innerText : 'default value';

    let nf = Number(document.getElementById('delay-input').value);

    const parameters = {
        'DeskEnabled': DeskEnabled,
        'direction': direction,
        'rotation': rotation,
        'nF': nf
    };

    // console.log(JSON.stringify(parameters));

    sessionStorage.setItem('parameters2', JSON.stringify(parameters));

    const nfValue = document.getElementById('delay-input').value;
    
    localStorage.setItem('nfValue', nfValue);

    const mesaValueElement = document.getElementById('mesa-value');
    if (mesaValueElement) {
        mesaValueElement.textContent = nfValue;
    }
}
