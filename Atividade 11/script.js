class funcionario{
    constructor(){
        this.matricula;
        this.nome;
        this.funcao;
    }
    setnome(value){
        this.nome = value
    }
    setmatricula(value){
        this.matricula = value
    }
    setfuncao(value){
        this.funcao = value
    }
}

var func1 = new funcionario()
func1.setnome("matahachi")
func1.setfuncao("soldador")
func1.setmatricula("124032")

// -------------------------------------------------------

var funcionario2 = new Object();
funcionario2.nome = "Cleberson";
funcionario2.matricula ="21344";
funcionario2.funcao = "Analista";


// -------------------------------------------------------

function funcionario3(){
    var nome;
    var matricula;
    var funcao;
    this.setNome = function(value){
        this.nome = value;
    }
    this.setMatricula = function(value){
        this.matricula = value;
    }
    this.setFuncao = function(value){
        this.funcao = value;
    }
}

var func3 = new funcionario3();
func3.setNome("takezo")
func3.setMatricula("531")
func3.setFuncao("Alfaiate")
