let parent;
parent = document.getElementById('monElement');

let enfant;
enfant = document.createElement('div');

enfant.innerHTML = '<h1>Bonjour</h1>';

parent.appendChild(enfant);

