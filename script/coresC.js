const cor1 = document.querySelector('#colo1');
const cor2 = document.querySelector('#colo2');
const cor3 = document.querySelector('#colo3');
const quanti = document.getElementById('#quanti');
let nQuanti = 200;
//pesquisar como alterar um let de uma function usando uma function!
function atuali(){

  document.querySelectorAll('i:nth-child(3n+1)').forEach((i) => 
    i.style.setProperty('--cor', cor1.value));
  document.querySelectorAll('i:nth-child(3n+2)').forEach((i) => 
    i.style.setProperty('--cor2', cor2.value));
  document.querySelectorAll('i:nth-child(3n+3)').forEach((i) => 
    i.style.setProperty('--cor3', cor3.value));
}



function rain(){
      let area = document.querySelector('#acao');
      area.innerHTML = "";
      let i = 0;
       while(i < nQuanti){
      let drop = document.createElement('i')
                
      let tamanho = Math.random() * 5;
      let posX = Math.floor(Math.random() * window.innerWidth);
      let delay = Math.random() * -20;
      let duracao = Math.random() * 5;

      drop.style.width = 0.2 + tamanho+'px';
      drop.style.left = posX + 'px';
      drop.style.animationDelay = delay+'s';
      drop.style.animationDuration = 1 + duracao+'s';

      area.appendChild(drop);
      i++;
  }
}

rain();