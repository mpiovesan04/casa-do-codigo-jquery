$(document).ready(function() {
  $(".quantidade").change(function(){
    escreveTotal(calculaTotal());
  });
});

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
    var total = $("total").text();
    return floatParaTexto(total);
}

function escreveTotal(valor) {
    var texto = floatParaTexto(valor);
    // console.log(texto);
    $("#total").text(texto);
}

function calculaTotal() {
    //Cria array com os elementos da class "produto"
    var produtos = $(".produto");
    //total
    var total = 0;

    $(produtos).each(function(pos, produto) {
        var $produto = $(produto);

        var quantidade = textoParaFloat(
          $produto.find(".quantidade").val());

        var preco = textoParaFloat(
          $produto.find(".preco").text());

        // console.log(quantidade);
        // console.log(preco);
        total += quantidade * preco;
    });
        // console.log(total);
    return total;
}
