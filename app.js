let listaAmigos = [];


function adicionarAmigo(){
    let amigo = document.getElementById("amigo");
    let nome = amigo.value;
    if(nome === ""){
        window.alert("Por favor, insira um nome.");
        return;
    } 
    if (listaAmigos.includes(nome)){
        window.alert("O nome já está na lista!");
    }else{
        listaAmigos.push(nome);
        amigo.value = "";
    }
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        let item = document.createElement("li"); 
        item.textContent = listaAmigos[i]; 
        lista.appendChild(item); 
    }
}

function sortearAmigo(){
    if (listaAmigos.length === 0) {
        window.alert("A lista de amigos está vazia! Adicione um amigo.");
        return;
    }
    lista = "";
    let sorteio = Math.floor(Math.random() * listaAmigos.length);
    let resultado = listaAmigos[sorteio];
    let resultadoFinal = document.getElementById("resultado");
    resultadoFinal.innerHTML = "";
    lista.innerHTML = "";
    let amigoSorteado = document.createElement("li"); 
    amigoSorteado.textContent = `Amigo sorteado: ${resultado}`; 
    resultadoFinal.appendChild(amigoSorteado); 

    listaAmigos = [];
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
}
