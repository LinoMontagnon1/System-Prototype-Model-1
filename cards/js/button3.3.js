var btn1RPM = document.querySelector('.rotation-speed .speed-option:nth-child(1)');
var btn5RPM = document.querySelector('.rotation-speed .speed-option:nth-child(2)');
var btn9RPM = document.querySelector('.rotation-speed .speed-option:nth-child(3)');

btn1RPM.addEventListener('click', function() {
    btn1RPM.style.background = '#12CE5A';
    btn1RPM.style.color = '#2C3131';
    btn5RPM.style.background = '#E9E9E9';
    btn5RPM.style.color = '#CACACA';
    btn9RPM.style.background = '#E9E9E9';
    btn9RPM.style.color = '#CACACA';

    btn1RPM.classList.add('active');
    btn5RPM.classList.remove('active');
    btn9RPM.classList.remove('active');
});

btn5RPM.addEventListener('click', function() {
    btn5RPM.style.background = '#12CE5A';
    btn5RPM.style.color = '#2C3131';
    btn1RPM.style.background = '#E9E9E9';
    btn1RPM.style.color = '#CACACA';
    btn9RPM.style.background = '#E9E9E9';
    btn9RPM.style.color = '#CACACA';

    btn5RPM.classList.add('active');
    btn1RPM.classList.remove('active');
    btn9RPM.classList.remove('active');
});

btn9RPM.addEventListener('click', function() {
    btn9RPM.style.background = '#12CE5A';
    btn9RPM.style.color = '#2C3131';
    btn1RPM.style.background = '#E9E9E9';
    btn1RPM.style.color = '#CACACA';
    btn5RPM.style.background = '#E9E9E9';
    btn5RPM.style.color = '#CACACA';

    btn9RPM.classList.add('active');
    btn1RPM.classList.remove('active');
    btn5RPM.classList.remove('active');
});

// btn1RPM.click();
