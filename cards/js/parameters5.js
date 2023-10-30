function saveParameters5() {
    let enableElement = document.querySelector('.execute-button.enable');
    let disableElement = document.querySelector('.execute-button.disable');
    let execute = enableElement && enableElement.classList.contains('active') ? 'enable' : 'disable';

    const parameters = {
        'execute': execute,
    };

    if (execute === 'enable') {
        let arrayAgrupado = [];
        let order = [1, 2, 3, 4];
        for (let i of order) {
            let parameters = JSON.parse(sessionStorage.getItem('parameters' + i));
            arrayAgrupado.push(parameters);
        }
        console.log(arrayAgrupado);
    }

    if (execute === 'disable') {
        let arrayAgrupado = [];
        for (let i = 1; i <= 4; i++) {
            sessionStorage.removeItem('parameters' + i);
            arrayAgrupado.push(null);
        }
        console.log(arrayAgrupado); 

        parent.location.reload();
        console.clear();
    }
}
