
function mostrarImagem (img) {
    const IMAGEMGRANDE = document.getElementById("imagemGrande");
    IMAGEMGRANDE.src = img.src;
    IMAGEMGRANDE.parentElement.style.display = "block";
}