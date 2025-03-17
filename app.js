//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let amigosSorteados = [];

function limparCampo(){
    let amigoNome = document.getElementById('amigo');
    amigoNome.value = '';

};

function adicionarAmigo(){
    let amigoNome = document.getElementById('amigo').value;
    if (amigoNome==''){
        alert("Por favor, insira um nome.")
    }else{
        amigos.push(amigoNome);
        listaAmigos(amigos);
        limparCampo();
    }
};

function listaAmigos(amigos){
    
    let lista = document.getElementById('listaAmigos'); 
    let n = amigos.length;
    lista.innerHTML = '';
    for (let i=0; i<n; i++){
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    };
};

function sortearAmigo(){
    let n = amigos.length;
    if (n === 0) {
        alert('Para sortear um amigo é preciso primeiramente cadastrá-los. Por favor, informe uma lista de amigos.');
    } else {
        let usuario = prompt('Por favor, insira seu nome como apresentado na lista.');
        let indiceUsuario = amigos.findIndex(amigo => amigo.toLowerCase() === usuario.toLowerCase());
        console.log(indiceUsuario);

        if (indiceUsuario === -1) {
            alert('Desculpe, mas seu nome não foi localizado na lista informada. Favor verificar se não houve erro de digitação ou se a lista está incompleta.');
        } else {
            let indice;
            do {
                indice = Math.floor(Math.random() * n);
            } while (indice === indiceUsuario || amigosSorteados.includes(amigos[indice])); 

            amigosSorteados.push(amigos[indice]);
            console.log('Índice sorteado: ' + indice);

            let texto = document.getElementById('resultTitle');
            texto.innerHTML = 'Seu amigo secreto é...';

            let resultado = document.getElementById('resultado');
            resultado.innerHTML = amigos[indice].charAt(0).toUpperCase() + amigos[indice].slice(1);
        }
    }
}



