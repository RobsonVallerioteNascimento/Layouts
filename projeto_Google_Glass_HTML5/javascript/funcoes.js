function mudaFoto(foto) {
    document.getElementById("icone").src = foto;
}

function calcular_Total(){
    let qtd = parseInt(document.getElementById("id_quantidade").value);
    let tot = qtd * 1500;

    document.getElementById("id_total").value = tot;
}