// Declaration classique de fonction
function print(a) {
    document.getElementsByClassName("first")[0].innerHTML = `${a}`;
}
//deuxieme maniere de declarer une fonction
// Anonyme

// Exemple d'utilisation de la fonction anonyme avec setTimeout()
setTimeout(
    (a, b) => {
        a = 4;
        b = 2;
        let s = a + b;
        print(s);
    }
    , 5000)

// troisieme methode de declarer une fonction
// Sous forme de variable
let somme = (a, b) => {
    return (a + b);
}

let difference = function (a, b) {
    return a - b;
}


print(somme(45, 6));

print(difference(124, 33));