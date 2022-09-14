// setTimeout()

let parent = document.getElementById("cible");



setTimeout(() => {
    let element = document.createElement("div");
    element.innerHTML = "Bonjour";
    parent.appendChild(element);

}, 300);