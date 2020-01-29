console.log('code JS chargé');
// determina si un elemento comienza a ser visible
$(function(){
    var elementApear = 450;
     $(window).scroll(function() {
       var scroll = getCurrentScroll();
         if ( scroll >= elementApear ) {
              $('.pourMontrer').addClass('fadeInLeft');
           }
           else {
               $('.pourMontrer').removeClass('fadeInLeft');
           }
     });
   function getCurrentScroll() {
       return window.pageYOffset;
       }
   });