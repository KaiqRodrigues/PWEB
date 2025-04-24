
function Retangulo(x, y){

    this.base = x;
    this.altura = y;

    this.calculo = function(){
        return this.base*this.altura
    }
}

var ret = new Retangulo(2,3);
console.log(ret.calculo())

//---------------------------------------------------


class Conta {
    
    constructor(nome, correntista, banco, numero, saldo) {
        this._nome = nome;
        this._correntista = correntista;
        this._banco = banco;
        this._numero = numero;
        this._saldo = saldo;
    }

    getnome() {
        return this._nome;
    }
    getcorrentista() {
        return this._correntista;
    }
    getbanco() {
        return this._banco;
    }
    getnumero() {
        return this._numero;
    }
    getsaldo() {
        return this._saldo;
    }
    setnome(valor) {
        this._nome = valor;
    }
    setcorrentista(valor) {
        this._correntista = valor;
    }
    setbanco(valor) {
        this._banco = valor;
    }
    setnumero(valor) {
        this._numero = valor;
    }
    setsaldo(valor) {
        this._saldo = valor;
    }
}

class Corrente extends Conta{
    constructor(){
        super();
        this.saldoEspecial;
    }

    getsaldoEspecial() {
        return this.saldoEspecial;
    }
    setsaldoEspecial(valor) {
        this.saldoEspecial = valor;
    }

}


class Poupanca extends Conta{
    constructor(){
        super();
        this.juros;
        this.dataVenc;
    }

    getjuros() {
        return this._juros;
    }
    getdataVenc() {
        return this._dataVenc;
    }

    setjuros(valor) {
        this._juros = valor;
    }
    setdataVenc(valor) {
        this._dataVenc = valor;
    }
}

let conta = new Conta();

let corrente = new Corrente();
corrente.setnome("Conta Corrente");
corrente.setcorrentista("Maria");
corrente.setbanco("Banco 2");
corrente.setnumero(5678);
corrente.setsaldo(2000);
corrente.setsaldoEspecial(500);

console.log(corrente.getnome());
console.log(corrente.getcorrentista());
console.log(corrente.getbanco());
console.log(corrente.getnumero());
console.log(corrente.getsaldo());
console.log(corrente.getsaldoEspecial());

let poupanca = new Poupanca();
poupanca.setnome("Conta");
poupanca.setcorrentista("Carlos");
poupanca.setbanco("Banco 3");
poupanca.setnumero(9101);
poupanca.setsaldo(3000);
poupanca.setjuros(0.05);
poupanca.setdataVenc("2025-12-31");

console.log(poupanca.getnome());
console.log(poupanca.getcorrentista());
console.log(poupanca.getbanco());
console.log(poupanca.getnumero());
console.log(poupanca.getsaldo());
console.log(poupanca.getjuros());
console.log(poupanca.getdataVenc());
