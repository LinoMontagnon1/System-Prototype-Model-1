const activeElements = new Set();

function toggleElement(elementId) {
    const element = document.querySelector(`[data-id="${elementId}"]`);
    const circle = element.querySelector('.circle');
    const ball = circle.querySelector('div:last-child');

    if (activeElements.has(elementId)) {
        activeElements.delete(elementId);
        circle.classList.remove('circle-active');
        circle.classList.add('circle-inactive');
        ball.style.left = '1.78px'; // inicio bolinha
    } else {
        activeElements.add(elementId);
        circle.classList.remove('circle-inactive');
        circle.classList.add('circle-active');
        ball.style.left = '16px'; // final bolinha
    }
    switch(elementId) {
        case 'button2':
            break;
    }
}