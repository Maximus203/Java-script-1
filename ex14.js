
/*
cible.addEventListener("focus", (e) => {
    e.preventDefault();
    reponse.innerHTML = cible.value;
});*/


function ecrireText() {
    let cible = document.getElementById("cible");
    let reponse = document.getElementById("reponse");
    reponse.innerHTML = cible.value;
}