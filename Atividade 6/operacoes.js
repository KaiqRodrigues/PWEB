function calculadora() {

    let num1 = parseFloat(prompt("Numero 1"));
    let num2 = parseFloat(prompt("Numero 2"));
    
    alert(`Soma: ${num1 + num2}`);
    alert(`Subtração: ${num1 - num2}`);
    alert(`Produto: ${num1 * num2}`);


    if (num2 !== 0) {
        alert(`Divisão: ${(num1 / num2)}`);
        alert(`Resto${num1 % num2}`);
    } else {

        alert("Erro: Divisão por zero");
    }
}
