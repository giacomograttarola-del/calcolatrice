/** 
 *  funzione per la somma
 * 
 * @param {number} a - il primo addendo,
 * @param {number} b - il secondo addendo,
 * 
 * @returns {number} Il risultato della somma di a piu' b.
 * 
 */ 
function somma(a,b) {
    return a + b;
}

/** 
 *  funzione per la sottrazione
 * 
 * @param {number} a - il minuendo,
 * @param {number} b - il sottraendo,
 * 
 * @returns {number} Il risultato della sottrazione di a meno b.
 * 
 */ 
function sottrai(a, b) {
    return a - b;
}

/** 
 *  funzione per la moltiplicazione
 * 
 * @param {number} a - il primo fattore,
 * @param {number} b - il secondo fattore,
 * 
 * @returns {number} Il risultato della moltiplicazione di a per b.
 * 
 */ 
function moltiplica(a, b) {
    return a * b;
}

/** 
    funzione per la divisione con gestione della divisione per zero
*
* @param {number} a - il dividendo,
* @param {number} b - il divisore,
*
* @returns {number} Il risultato della divisione di a per b.
*
* @throws {Error} Throws an error if division by zero is attempted.
* 
*/
function dividi(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
/**
 *
 *  funzione di selezione dell'operazione e ritorno del valore a schermo
 * 
 * @param {number} operazione - codice dell'operazione da eseguire:
 *  
 *      1 per somma,
 *      2 per moltiplicazione,
 *      3 per sottrazione,
 *      4 per divisione.
 * 
 * @returns {void} Aggiorna il contenuto dell'elemento con id 'result' con il risultato dell'operazione selezionata.
 *
 * @throws {Error} Logs a warning to the console if an unknown operation code is provided.
 */
function calcola(operazione) {
    let num1 = document.getElementById('val1').value;
    let num2 = document.getElementById('val2').value;
    operazione = parseInt(operazione);

    let Result;
    switch (operazione) {
        case 1: 
            Result = somma(parseFloat(num1), parseFloat(num2));
            document.getElementById('result').innerText = Result;
            break;
        case 3:
            Result = sottrai(parseFloat(num1), parseFloat(num2));
            document.getElementById('result').innerText = Result;
            break;
        case 2:
            Result = moltiplica(parseFloat(num1), parseFloat(num2));
            document.getElementById('result').innerText = Result;
            break;
        case 4:
            Result = dividi(parseFloat(num1), parseFloat(num2));
            document.getElementById('result').innerText = Result;
            break;
        default:
            console.warn("Unknown operation:", operazione);
    }
}

/**
 * funzione per resettare i campi di input e il risultato
 * 
 * @returns {void} Resetta i valori degli elementi con id 'val1', 'val2' e 'result'.
 */
function resetta() {
    document.getElementById('val1').value = '';
    document.getElementById('val2').value = '';
    document.getElementById('result').innerText = '';
}