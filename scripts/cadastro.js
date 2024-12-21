/* função para validação da senha: */
function senha_valida(senha){
    const array_numerico = [0,1,2,3,4,5,6,7,8,9,10];

    var quant_false = null;

    for(let cont = 0; cont < senha.length; cont += 1){
        if(array_numerico.indexOf(Number(senha[cont])) == -1){
            quant_false += 1;
        }
    }

    if(quant_false >= 1){
        return false;
    }else{
        return true;
    }
}

/* ligando as principais elementos interativos da interface ao javascript: */
const link_comprar = window.document.querySelector("header > nav > a");

/* ligando os principais inputs do formulario ao javascript: */
const formulario = window.document.querySelector("main > form");
var txt_email = window.document.getElementById("email");
var txt_senha = window.document.getElementById("senha");

/* variáveis que vão tratar sobre as propriedades específicas do modal 
seguindo os dados informados pelo usuário no formulário, de forma
dinâmica: */
var modal = window.document.querySelector("body > dialog");
const mensagem_sucesso = window.document.querySelector("dialog > div > p#sucesso");
const mensagem_erro = window.document.querySelector("dialog > div > p#erro");
const botao_modal = window.document.querySelector("dialog > div > input");

/* no momento que o usuário clicar no link para comprar o e-book, será informado
que a quantidade de e-books em estoque esgotaram!: */
link_comprar.addEventListener("click", ()=>{
    window.alert("A quantidade de e-books no estoque esgotaram!");
});

/* adicionando um ouvidor de eventos 'submit' para o formulário, a partir desse momento
vamos capturar os dados informados pelo usuário: */
formulario.addEventListener("submit", (evento)=>{

    evento.preventDefault();

    let senha = String(txt_senha.value).trim().toLowerCase();

    /* validação da senha, onde nela so poderá haver dados numéricos,
    lembre-se a senha por padrão vem como string, por essa razão será
    necessário converte-la para o formato numérico:*/
    let resultado_senha = senha_valida(senha);
    
    /* será exibido versões com mensagens de sucesso ou falha do modal, seguindo 
    os dados inseridos pelo meu usuário: */
    if(resultado_senha == false){
        mensagem_sucesso.style.display = "none";
        mensagem_erro.style.display = "block";
        botao_modal.style.background = "red";
        botao_modal.style.border = "red";
        modal.style.display = "block";
    } else{
        modal.style.display = "block";
    }
    txt_email.value = "";
    txt_senha.value = "";
});

/* adicionando ouvidor de clicks para fechar a modal: */
botao_modal.addEventListener("click",()=>{
    modal.style.display = "none";
   /* a partir do momento que eu aplicar essas novas estilizações com 
    javascript, ela ficará sempre a mesma, por isso é necessário, após o clique
    no botao de fechar o modal, fazer o reload da página, que vai voltar as 
    estilizações padrão desenvolvida no css:
    */
    window.location.reload();
});
