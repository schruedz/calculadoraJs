let operacionActual = '';

const ingresarNumero = (num) => {
    const resultado = document.getElementById('resultado');
    resultado.innerText = (resultado.innerText === '0') ? num : resultado.innerText + num;
};

const limpiar = () => {
    operacionActual = '';
    document.getElementById('resultado').innerText = '0';
};

const operar = (op) => {
    const resultado = document.getElementById('resultado');
    operacionActual += resultado.innerText + ' ' + op + ' ';
    resultado.innerText = '0'; // Limpiar el resultado para el siguiente número
};

const calcular = () => {
    const resultado = document.getElementById('resultado');
    operacionActual += resultado.innerText; // Agregar el último número antes de evaluar
    try {
        const evalResultado = eval(operacionActual);
        resultado.innerText = evalResultado;
    } catch (error) {
        resultado.innerText = 'Error';
    }
    operacionActual = ''; // Reiniciar la operación actual
};
