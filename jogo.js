

var altura = 0;
var largura = 0;

function ajustaTamanhoPalcoJogo(){
   altura = window.innerHeight;
   largura = window.innerWidth;
}
ajustaTamanhoPalcoJogo();

function posicaoRandomica(){


   var posicaoX = Math.random()*largura;
   posicaoX = Math.floor(posicaoX) - 90;
   var posicaoY = Math.random()*altura;
   posicaoY = Math.ceil(posicaoY) - 90;

   if(posicaoX<0){
      posicaoX = 0;
   }
   else if(posicaoY<0){
      posicaoY = 0;
   }
   console.log(posicaoX,posicaoY) ;

   var mosquito  = document.createElement('img');
   mosquito.src = 'img/mosca.png';
   mosquito.className = tamanhoAleatorio();
   console.log(mosquito.className);
   mosquito.style.left = posicaoX + 'px';
   mosquito.style.top = posicaoY + 'px';
   mosquito.style.position = 'absolute';

   document.body.appendChild(mosquito);
   
}


function tamanhoAleatorio(){
   var classe = Math.floor((Math.random() *3)+1);
   return 'mosquito'+classe;
}