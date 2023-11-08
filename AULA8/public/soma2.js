function soma(x, y) {
    console.log("vai somar: " + x + "+" + y);
    document.getElementById('resultado').innerHTML = "";
    if (!ehInteiro(x)) {
        alert("Valor 1 não é um número inteiro!");
    }
    if (!ehInteiro(y)) {
        alert("Valor 2 não é um número inteiro!");
    }
    if (ehInteiro(x) && ehInteiro(y)) {
        document.getElementById('resultado').innerHTML = parseInt(x) + parseInt(y);
    }
}

function ehInteiro(n) {
    console.log(Number.isInteger(parseInt(n)));
    return Number.isInteger(parseInt(n));
}