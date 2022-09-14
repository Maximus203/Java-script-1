function print(a) {
    document.getElementById("cible").innerHTML = `${a}`;
}

//let text = document.getElementById("test").innerHTML;
//printf(text);
//printf("bonjour");
function scan() {
    let a = prompt("que voulez vous?");
    return a;
}
let a = scan();
print(a);
print("bonjour");
print("cherif");

