//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function limparCampo(){
    amigoNome = document.getElementById('amigo');
    amigoNome.value = '';
};

function adicionarAmigo(){
    let amigoNome = document.getElementById('amigo').value;
    if (amigoNome==''){
        alert("Por favor, insira um nome.")
    }else{
        amigos.push(amigoNome);
        limparCampo();
    }
};