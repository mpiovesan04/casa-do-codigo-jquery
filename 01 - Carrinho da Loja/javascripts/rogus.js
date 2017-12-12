var total = document.getElementById("total");
var textoFormatado = floatParaTexto(textoParaFloat(total.innerHTML));

//Exibe um alerta com o html interno do elemento com o id total
//alert(total.innerHTML);

//Função que converte texto em float
function textoParaFloat(texto) {
    var textoLimpo = texto.replace("R$ ", "").replace(",", ".");
    return parseFloat(textoLimpo);
}
function floatParaTexto(valor) {
//  Math.floor arredonda o número para baixo 5.4=5, -5.4=6

    var texto = (valor < 1 ? "0" : "") + Math.floor(valor * 100);
    texto = "R$ " + texto;
//  substr extrai os caracteres exemplo.substr(comeco, fim)
    return texto.substr(0, texto.length - 2) + "," + texto.substr(-2);
}
//== significa equivalente, === igual o mesmo para != e !==
//alert(textoFormatado === total.innerHTML);

function lerTotal() {
    return textoParaFloat(total.innerHTML);
}
function escreveTotal(valor) {
    total.innerHTML = floatParaTexto(valor);
}

function calculaTotalProdutos() {
    //Cria array com os elementos da class "produto"
    var produtos = document.getElementsByClassName("produto");
    //total
    var totalProdutos = 0;

    for(var i=0; i < produtos.length; i++) {
        var precoElementos = produtos[i].getElementsByClassName("preco");
        var precoTexto = precoElementos[0].innerHTML;
        var preco = textoParaFloat(precoTexto);
    //    console.log(preco);

        var qntElementos = produtos[i].getElementsByClassName("quantidade");
        var qntTexto = qntElementos[0].value;
        var quantidade = textoParaFloat(qntTexto);
    //    console.log(quantidade);

        var subtotal = quantidade * preco;

       totalProdutos += subtotal;
    }
        // console.log(totalProdutos);
    return totalProdutos;
}

//escreveTotal(3.14159);

function quantidadeMudou() {
    escreveTotal(calculaTotalProdutos());
}

window.onload = function() {
    var textoEdita = document.getElementsByClassName("quantidade");

    for(var i = 0; i < textoEdita.length; i++) {
        textoEdita[i].onchange = quantidadeMudou;
    }
}
