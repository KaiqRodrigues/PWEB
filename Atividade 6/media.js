function media() {
    let nome = prompt("Nome");


    var nota1 = parseFloat(prompt(`Nota: 1`))
    var nota2 = parseFloat(prompt(`Nota: 2`))
    var nota3= parseFloat(prompt(`Nota: 3`))
    var nota4 = parseFloat(prompt(`Nota: 4`))


    let media = (nota1+nota2+nota3+nota4)/4


    alert(`Média: ${media}`);
}