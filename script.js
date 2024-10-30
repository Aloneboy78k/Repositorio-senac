// SELECIONANDO ELEMENTOS HTML:
const botão = document.getElementById('botão');
const mensagem = document.getElementById('mensagem');
const tempo = document.getElementById('tempo');
//salvar estado inicial da pagina:
const TextoOriginal ="You just clicked the button e and it´s content has changed" 
const corOriginal = "#f0f0f0";

//variavel de controle (flag):
let alterado = false;

// definindo função pra alterar o texto e a cor de fundo
function exibircarregamento(id){
    const loader = document.createElement('div');
    loader.classList.add('loader');
    document.body.appendChild(loader);
    return loader;

function alterarconteudo(){
   const loader = exibircarregamento();
   setTimeout(()) =>{
   
   
   
    if(! alterado) {
    // alterando o texto
    mensagem.innerHTML = "You just clicked the button e and it´s content has changed."
    
    // alterando a cor de fundo
    document.body.style.backgroundColor = '#FFD700';
    
    // adicionando um evento de click ao botão
    botão.addEventListener('click',alterarconteudo,false); //
 
    
     } 
     else {
    // Voltando ao estado original:
    mensagem.innerHTML = TextoOriginal;
    document.body.style.backgroundColor = corOriginal;
    }
alterado = !alterado;
loader.remove();
alterarconteudo();
   } ,2000);
}
}













