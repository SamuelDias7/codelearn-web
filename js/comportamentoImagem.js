let inputRadio = document.querySelectorAll('input[type=radio]');
let imagens = document.querySelectorAll('.removeimagem');

for(let i = 0; i < inputRadio.length; i++){
  inputRadio[i].addEventListener('click', function(){
    for(let j = 0; j < imagens.length; j++){
      if(j === i && inputRadio[i].checked){
        imagens[j].classList.remove("removeimagem");
      } else {
        imagens[j].classList.add("removeimagem");
      }
    }
  });
}
