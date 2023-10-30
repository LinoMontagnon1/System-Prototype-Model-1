let relayEnabled2 = 0;
let loop = 0;

function toggleElement4(elementId) {
    const element = document.querySelector(`[data-id="${elementId}"]`);
    const circle = element.querySelector('.circle');

    if (activeElements.has(elementId)) {
        activeElements.delete(elementId);
        circle.classList.remove('circle-active');
        circle.classList.add('circle-inactive');
        relayEnabled2 = 0;
    } else {
        activeElements.add(elementId);
        circle.classList.remove('circle-inactive');
        circle.classList.add('circle-active');
        relayEnabled2 = 1;
    }
}

function saveParameters4() {
    loop = Number(document.getElementById('loop-input').value);

    const loopValueElement = document.getElementById('loop-value');
    if (loopValueElement) {
        loopValueElement.textContent = loop;
    }

    const parameters = {
        'relayEnabled2': relayEnabled2,
        'loop': loop
    };

    sessionStorage.setItem('parameters4', JSON.stringify(parameters));

    // console.log(JSON.stringify(parameters));
}

