// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();
  
    if (nombre === "") {
      alert("Por favor, inserte un nombre.");
      return;
    }
  
    amigos.push(nombre);
  
    inputAmigo.value = "";
 
    actualizarListaAmigos();

    inputAmigo.focus.value = "";
    inputAmigo.focus();
}

function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
      // Crear un nuevo elemento <li>
      const li = document.createElement("li");
      li.textContent = amigos[i];
      lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
      alert("No hay amigos para sortear. Por favor, agrega al menos un amigo.");
      return;
    }
    

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];
    
    const elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}




