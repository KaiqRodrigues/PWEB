function validar(e) {
    e.preventDefault();
    const f = document.nomeform.elements;

    if (f["nome"].value.length < 10) {
        alert("Nome deve ter no mínimo 10 caracteres.");
        return;
    }

    if (f["comentario"].value.length < 20) {
        alert("Comentário deve ter mínimo 20 caracteres.");
        return;
    }

    const pesquisa = document.getElementsByName("pesquisa");
    let selecionado = false;

    for (let i = 0; i < pesquisa.length; i++) {
        if (pesquisa[i].checked) {
            selecionado = true;
            break;
        }
    }

    if (!selecionado) {
        alert("Que bom que você voltou");
    } else {
        alert("Volte sempre");
    }

    document.nomeform.submit();
}
