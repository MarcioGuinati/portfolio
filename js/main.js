/*Efeito de jogar o menu para o lado inicio*/
function openNav() {
  document.getElementById("mymenuLateral").style.width = "250px";
  document.getElementById("menu").style.marginLeft = "200px";
}

function closeNav() {
  document.getElementById("mymenuLateral").style.width = "0";
  document.getElementById("menu").style.marginLeft = "0"; 
}
/*Efeito de jogar o menu para o lado fim*/

/*Validação do formulario de contato ao enviar mensagem inicio*/
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
    var forms = document.getElementsByClassName('needs-validation');
    // Faz um loop neles e evita o envio
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
/*Validação do formulario de contato ao enviar mensagem fim*/

/*Efeito da letra escrever o nome automatico inicio*/
function typeWrite(elemento){
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach(function(letra, i){   
    
  setTimeout(function(){
      elemento.innerHTML += letra;
  }, 75 * i)

});
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);
/*Efeito da letra escrever o nome automatico fim*/