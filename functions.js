function gerarNumerosAleatorios(a1, a2) {
    var a1 = parseInt(Math.random() * 20);
    var a2 = parseInt(Math.random() * 20);
    var lista = [a1, a2];
    return lista;
}

function buscarNumeros() {
    var labelN1 = document.querySelector("#n1");
    var labelN2 = document.querySelector("#n2");
    var numsAleatorios = gerarNumerosAleatorios();
        
    labelN1.textContent = numsAleatorios[0];
    labelN2.textContent = numsAleatorios[1];

    document.querySelector('#resposta').style.display = "flex";
    document.querySelector('#botaoResponder').style.display = "block";
    document.querySelector('.calculo').style.display = "flex"; 

    return numsAleatorios;
} 

//funções

function soma() {
    var numeros = buscarNumeros();
    var operacao = document.querySelector("#operacao");
    var simboloIgual = document.querySelector("#simboloIgual");
    operacao.textContent = "+";
    simboloIgual.textContent = "=";
    somaDosNumeros = numeros[0] + numeros[1];

    return somaDosNumeros;
}

function subtracao() {
    var numeros = buscarNumeros();
    var operacao = document.querySelector("#operacao");
    var simboloIgual = document.querySelector("#simboloIgual");
    operacao.textContent = "–";
    simboloIgual.textContent = "=";
    subtracaoDosNumeros = numeros[0] - numeros[1];

    return subtracaoDosNumeros;
}

function multiplicacao() {
    var numeros = buscarNumeros();
    var operacao = document.querySelector("#operacao");
    var simboloIgual = document.querySelector("#simboloIgual");
    operacao.textContent = "×";
    simboloIgual.textContent = "=";
    multiplicacaoDosNumeros = numeros[0] * numeros[1];

    return multiplicacaoDosNumeros;
}

function divisao() {
    var numeros = buscarNumeros();
    var operacao = document.querySelector("#operacao");
    var simboloIgual = document.querySelector("#simboloIgual");
    operacao.textContent = "÷";
    simboloIgual.textContent = "=";
    divisaoDosNumeros = numeros[0] / numeros[1];

    return divisaoDosNumeros;
}


function verificaResultado() {
    var n1 = parseInt(document.querySelector("#n1").textContent);
    var n2 = parseInt(document.querySelector("#n2").textContent);
    var operacao = document.querySelector("#operacao").textContent;
    console.log(operacao);  
    var resposta = document.getElementById("resposta").value; //para pegar input do usuario tem q ser value

    if (operacao == "+"){
        resultado = n1 + n2;
    }
    else if (operacao == "–"){
        resultado = n1 - n2;
    }
    else if (operacao == "×"){
        resultado = n1 * n2;
    }
    else if (operacao == "÷"){
        if (n2 == 0){
            alert("Impossível dividir por ZERO! Gere a conta novamente por favor.");
        }
        else {
          resultado = n1 / n2;
        }
    }

    if (resposta == resultado){
        alert("ACERTOU!!! Treine com outra operação :D");

        document.querySelector('.calculo').style.display = "none";
        document.querySelector('#resposta').style.display = "none";

        document.querySelector('#resposta').value = "";
        document.querySelector('#botaoResponder').style.display = "none";
    }
    else {
        alert("ERROU! :("); 
        document.querySelector('#resposta').value = "";
    }
}

  

