// funzione per la somma
function somma(a,b) {
    return a + b;
}

// funzione per la sottrazione
function sottrai(a, b) {
    return a - b;
}

// funzione per la moltiplicazione
function moltiplica(a, b) {
    return a * b;
}

// funzione per la divisione con gestione della divisione per zero
function dividi(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// funzione di selezione dell'operazione e ritorno del valore a schermo
function calcola(operazione) {
    let num1 = document.getElementById('val1').value;
    let num2 = document.getElementById('val2').value;
    operazione = parseInt(operazione);

    let Result;
    switch (operazione) {
        case 1: // somma
            Result = somma(parseFloat(num1), parseFloat(num2));
            document.getElementById('result').innerText = Result;
            break;
        case 3: // sottrazione
            Result = sottrai(parseFloat(num1), parseFloat(num2));
            document.getElementById('result').innerText = Result;
            break;
        case 2: // moltiplicazione
            Result = moltiplica(parseFloat(num1), parseFloat(num2));
            document.getElementById('result').innerText = Result;
            break;
        case 4: // divisione con gestione della divisione per zero (vedi dividi())
                Result = dividi(parseFloat(num1), parseFloat(num2));
                document.getElementById('result').innerText = Result;
            break;
        default: //default in caso di errore di tipo operazione
            console.warn("Unknown operation:", operazione);
    }
}

//funzione di reset dei campi
function resetta() {
    document.getElementById('val1').value = '';
    document.getElementById('val2').value = '';
    document.getElementById('result').innerText = '';
}