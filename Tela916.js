var text1='- Qual a ortografia correta para a palavra encontrada?';
var text2='Ótimo! Você achou uma palavra Agora selecione a opção correta'

function tela16(){

    background(imgJogar);
    image(imgSorte,300,55,100,100);
    image(imgDuvida,3,380,100,100);
    image(imgDuvida,300,380,100,100);

    fill('white');

    rect(95,240,200,40,5);
    rect(95,300,200,40,5);
    rect(95,360,200,40,5);
    
//Quando passar o mouse ficar rosa ou ir para a tela de destino
  if(mouseX>=95 && mouseX<295 && mouseY>=240 && mouseY<280){
    if(mouseIsPressed){
      rect(95,240,200,40);
      tela=17;
      somErrar.play();
    }else{
    fill('pink');
    rect(95,240,200,40,5);}}
      
  if(mouseX>=95 && mouseX<295 && mouseY>=300 && mouseY<340){
    if(mouseIsPressed){
      rect(95,300,200,40);
      tela=17;
      somErrar.play();
    }else{
    fill('pink')
    rect(95,300,200,40,5);}}
   
  if(mouseX>=95 && mouseX<295 && mouseY>=360 && mouseY<400){
    if(mouseIsPressed){
      rect(95,360,200,40);
      tela=6;
      somAcertar.play();
    }else{
    fill('pink')
    rect(95,360,200,40,5);}}

    btVoltar();
    voltar();
    
    text(text1,25,190,360,200);
    text('Re-escrever',130,270);
    text('Re escrever',130,330);
    text('Reescrever',130,390);
    
    fill('#E0F8F7')
    rect(4,72,300,60,10);
    fill(0);
    text(text2,10,80,300,200);
          
    
}