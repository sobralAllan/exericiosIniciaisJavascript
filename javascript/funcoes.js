var opcao = 0;
var a = 10;
var b = 20;
var msg = "";
var c = 0;

function menu(){
    this.opcao = prompt("---- Menu ----\n"  + 
                        "0. Sair\n"         +
                        "1. Exercício 01\n" + 
                        "2. Exercício 02\n" +
                        "3. Exercício 03\n" +
                        "4. Exercício 04\n" +
                        "Escolha uma das opções"
                        );
}//fim da função menu

function operacao(){
    menu();//Chamar o menu de opções

    switch(this.opcao){
        case '0':
            console.log("Obrigado!");
            break;
        case '1':
            console.log("Exercício 01:\n " + exercicio01());
            break;
        case '2':

            break;
        case '3':

            break;
        default:
            console.log("Escolha uma opção válida!");
            break; 
    }//fim do switch 
}//fim da função operação

function exercicio01(){
    //Mensagem Inicial
    this.msg = "A: " + this.a + "\nB: " + this.b;
    this.msg += "\n\nTroca\n\n";
    //Troca
    this.c = this.a;
    this.a = this.b;
    this.b = this.c;
    //Mensagem final
    this.msg += "A: " + this.a + "\nB: " + this.b;
    return this.msg;
}//fim do método

function exercicio02(){
    
}


//Chamar o método operacao
operacao();