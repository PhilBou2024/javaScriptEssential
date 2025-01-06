let grocery1;
let grocery2;
let grocery3;
let solde = 0.0;

function calculateTotal() {
    grocery1 = parseFloat(document.getElementById('grocery1').value);
    grocery2 = parseFloat(document.getElementById('grocery2').value);
    grocery3 = parseFloat(document.getElementById('grocery3').value);
    
    if (document.getElementById('solde').innerText == "") {
        solde = 0.0;
    }
    else {
        solde = parseFloat(document.getElementById('solde').innerText.replace(/[^0-9\.]/g, ''));
    }

    let total = solde + grocery1 + grocery2 + grocery3;

    document.getElementById('solde').innerText = `Solde: ${total}`;

    document.getElementById('result').innerText = `The total amount is:$ ${total}`;

}