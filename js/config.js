$(document).ready(function(){

$('.btm').on("click",function(e){ 
     e.preventDefault();
    $('.sub2').slideToggle('fast',function(){
      if(!$(this).is(':hidden')) {
        $('.btm .botao').attr('src',"imgmobile/botao-menu-aberto.png" );
        }
      else {
        $('.btm .botao').attr('src',"imgmobile/botao-menu.png" );     
      }
    });
    
   
});

});