'use strict';

// ativar o slick
$('.slide-img').slick({
    autoplay: true,
    autoplaySpeed:2000,
    arrows: false,
    dots:true
});

$('#telefone').mask("(00) 0000-0000");
// $('#celular').mask("(00) 00000-0000");

// Script para contador
var spanMaximo =$('#maximo');
var bCaracteres =$('#caracteres');
var textMensagem =$('#mensagem');

var quantidade = 300;


// evento para detectar a digitação
textMensagem.on("input", function(){
// captura em tempo real
var conteudo= textMensagem.val();
// criando uma contagem regressiva
var contagem = quantidade - conteudo.length;

console.log(contagem);

bCaracteres.text(contagem);

// Se chegar em 0 a contagem exibir em vermelho, se não em preto
if(contagem == 0){
spanMaximo.css('color','red');
} else {
spanMaximo.css('color','black');
}
});