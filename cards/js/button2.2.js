var btnClockwise = document.querySelector('.clockwise');
var btnAnticlockwise = document.querySelector('.anticlockwise');


btnClockwise.addEventListener('click', function() {
    btnClockwise.style.background = '#FFB62D';
    btnClockwise.style.color = '#2C3131';
    btnAnticlockwise.style.background = '#E9E9E9';
    btnAnticlockwise.style.color = '#CACACA';

    btnClockwise.classList.add('active');
    btnAnticlockwise.classList.remove('active');
});

btnAnticlockwise.addEventListener('click', function() {

    btnAnticlockwise.style.background = '#12CE5A';
    btnAnticlockwise.style.color = '#2C3131';
    btnClockwise.style.background = '#E9E9E9';
    btnClockwise.style.color = '#CACACA';

    btnAnticlockwise.classList.add('active');
    btnClockwise.classList.remove('active');
});

// btnClockwise.click();
