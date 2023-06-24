const form = document.getElementById('formulario');
const numeroA = document.getElementById('numero_A');
const numeroB = document.getElementById('numero_B');
const valido = document.getElementById('valid');
const invalido = document.getElementById('error');

function validarNumero(numeroA, numeroB) {
    return numeroB > numeroA;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let mensagem = `O numero ${numeroB.value} é maior que ${numeroA.value}, por tanto é valido.`
    let isValid = validarNumero(numeroA.value, numeroB.valueAsNumber);
    if (isValid) {
        valido.style.display = 'block';
        valido.style.backgroundColor = 'green'
        valido.style.color = 'white'
        numeroA.value = "";
        numeroB.value = "";
        valido.innerHTML = mensagem;
    }
});

numeroB.addEventListener('keyup', function (e) {
    let isValid = validarNumero(numeroA.value, numeroB.value);
    if (!isValid) {
        invalido.style.display = 'block';
        invalido.style.backgroundColor = 'red'
        invalido.style.color = 'white'
        valido.style.display = 'none';
    } else {
        invalido.style.display = 'none';
    }
});
