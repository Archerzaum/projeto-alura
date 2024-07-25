let textInput = document.querySelector('.texto__cripto');
let textOutput = document.querySelector('.resultados');

function cripto(){
  let texto = textInput.value
  let resultCripto = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat')
  verificador(resultCripto)
  }

function descripto() {
  let texto = textInput.value
  let resultCripto = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u')
  verificador(resultCripto)
}

function copiar() {
  let textoCop = document.querySelector('.texto__resultado')
  textoCop.select();
  document.execCommand('copy');
  alert("Texto copiado.");
} 

function verificador(resultCripto) {
  if(textInput.value == ''){
    document.querySelector('.resultados').innerHTML = '<img class="simbolo" src="./assets/Group 6.png" alt="Símbolo de Octógono com uma interrogação entre chaves">' +
    '<p class="texto__campo">Nenhuma mensagem encontrada</p>' +
    '<p class="texto__comando">Digite um texto que você deseja criptografar ou descriptografar.</p>'
    }
    else {
      document.querySelector('.resultados').innerHTML = '<textarea readonly class="texto__resultado">' + resultCripto + 
      '</textarea>' + '<button class="copiar" onclick="copiar()">Copiar</button>'
    }
}