var btnEnable = document.querySelector('.enable');
var btnDisable = document.querySelector('.disable');

btnEnable.addEventListener('click', function() {
    btnEnable.style.background = '#12CE5A';
    btnEnable.style.color = '#2C3131';
    btnDisable.style.background = '#E9E9E9';
    btnDisable.style.color = '#CACACA';

    btnEnable.classList.add('active');
    btnDisable.classList.remove('active');
});


btnDisable.addEventListener('click', function() {
    btnDisable.style.background = '#FFB62D';
    btnDisable.style.color = '#2C3131';
    btnEnable.style.background = '#E9E9E9';
    btnEnable.style.color = '#CACACA';

    btnDisable.classList.add('active');
    btnEnable.classList.remove('active');
});
