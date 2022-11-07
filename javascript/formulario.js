var msg = ""
var nome = ""
var telefone = ""
var endereco = ""
var cidade = ""
var uf = ""
var pagina = ""

function coletar(){
    nome     = document.getElementById('tNome').value;
    telefone = document.getElementById('tTelefone').value;
    endereco = document.getElementById('tEndereco').value;
    cidade   = document.getElementById('tCidade').value;
    uf       = document.getElementById('tUF').value;
    //Concatenando
    msg = "Nome: "      + nome     + 
         "\nTelefone: " + telefone +
         "\nEndereço: " + endereco + 
         "\nCidade: "   + cidade   + 
         "\nUF: "       + uf;
    //Mostrando na tela
    document.getElementById('lResultado').innerHTML = msg;
}//fim da função


