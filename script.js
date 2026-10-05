// Array que irá armazenar os dois números
let numeros = [];

// Função para pegar os números digitados
function pegarNumeros() {

    numeros = [];

    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    // Adicionando os números ao array
    numeros.push(numero1);
    numeros.push(numero2);

    return numeros;
}

// Função de adição
function adicionar() {

    pegarNumeros();

    let resultado = numeros[0] + numeros[1];

    document.getElementById("resultado").innerHTML =
        "Resultado: " + resultado;
}

// Função de subtração
function subtrair() {

    pegarNumeros();

    let resultado = numeros[0] - numeros[1];

    document.getElementById("resultado").innerHTML =
        "Resultado: " + resultado;
}
