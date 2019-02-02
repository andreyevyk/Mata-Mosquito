

var altura = 0;
var largura = 0;
var vidas = 3;

function ajustaTamanhoPalcoJogo(){
   altura = window.innerHeight;
   largura = window.innerWidth;
}
ajustaTamanhoPalcoJogo();

function posicaoRandomica(){

   if(document.getElementById('mosquito')){
      document.getElementById('mosquito').remove();
      
      console.log(vidas)
      if(vidas==0){
         alert('perdeu')
      }else{
         document.getElementById('v'+vidas).src = "img/coracao_vazio.png"
         vidas--
      }
      
   }

   var posicaoX = Math.random()*largura;
   posicaoX = Math.floor(posicaoX) - 90;
   var posicaoY = Math.random()*altura;
   posicaoY = (Math.ceil(posicaoY) - 90)-document.getElementById('painel').clientHeight;

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
   mosquito.className += ' ' + ladoAleatoria();
   mosquito.style.left = posicaoX + 'px';
   mosquito.style.top = posicaoY + 'px';
   mosquito.style.position = 'absolute';
   mosquito.id = 'mosquito'
   mosquito.onclick = function(){
      this.remove();
   }
   document.body.appendChild(mosquito);
   
   console.log(ladoAleatoria());
}


function tamanhoAleatorio(){
   var classe = Math.floor((Math.random() *3)+1);
   return 'mosquito'+classe;
}

function ladoAleatoria(){
   var classe = Math.floor( Math.random() * 2 );
   
   switch(classe){
      case 0: 
         return 'ladoA';
      case 1: 
         return 'ladoB';
   }
   
}