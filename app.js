//Array global para armazenar os nomes dos amigos 
let amigos = [];


function atualizarLista(){
    //pega o elemento d alista (a <ul>) no HTML
    let listaHTML= document.getElementById('listaAmigos');

    //1. Limpa todo o conteudo HTML dentro da lista
    //isso garante que nao vamos adicionar nomes duplicados na tela 
    listaHTML.innerHTML='';
    for (let amigo of amigos){
        //3. para cada amigo, cria um elemento <li> e o adiciona ao HTML da lista 
        //Usamos '+=' para adicionar o novo item sem apagar os que ja foram adicionados neste loop
        listaHTML.innerHTML+=`<li>${amigo}<li>`;
    }
}

//Função principal para adicionar um novo amigo 
function adicionarAmigo (){
    //1. Obter os elementos do HTML
    let inputNome = document.getElementById('amigo');
    
    let nome = inputNome.value.trim();// . trim () remove espaço em branco no inicio e fim 
    //2. Validar o nome 
    if (nome===''){
        alert ('Por favor, digite um nome antes de adicionar. ');
        return; //para a função se o nome for inválido 
    }
    if (amigos.includes(nome)){
        alert('Este nome ja foi adicionado. Por favor, insira um nome diferente.');
        inputNome.value ='';//Limpa o campo 
        return;// Para a função se o nome for repetido
    }

    //3. Adicionar o amigo ao array
    amigos.push(nome);
    atualizarLista();

    inputNome.value='';
    inputNome.focus();

}

//1. Validar que há amigos suficientes para o sorteio 
function sortearAmigo(){
    //Adicionar lógica do sorteio aqui 
    if (amigos.length < 3){
        alert('Adicionar pelo menos 3 amigos para um sorteio justo!');
        return;
}
//2. Gerar um índice aleatório
    const indiceSorteado =Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // 4. Mostrar o resultado na tela
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<li>O amigo sorteado foi: <strong>${amigoSorteado}</strong></li>`;
}

// Função para reiniciar (adicionado o botão no HTML para ela)
function reiniciarSorteio(){
    amigos = [];//Esvazia o array 
    // Chama a funçao para que a tela reflita a lista vazia 
    atualizarLista();
    //limpa tambem a area de resultado do sorteio
    document.getElementById('resultado').innerHTML='';
}
