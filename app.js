// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const campoDeEntrada = document.getElementById('amigo');
const botonAdicionar = document.querySelector('.button-add');
const botonSortear = document.querySelector('.button-draw');
const listaDeAmigos = document.getElementById('listaAmigos');
const divResultado = document.getElementById('resultado');
let amigos = [];

function agregarAmigo() {
    const nombreAmigo = campoDeEntrada.value.trim();
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombreAmigo);
        campoDeEntrada.value = "";
        actualizarListaDeAmigos();
    }
}
function actualizarListaDeAmigos() {
    listaDeAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaDeAmigos.appendChild(li);
    });
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Por favor, agrega al menos un nombre.");
    } else {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceAleatorio];
        divResultado.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
    }
}
