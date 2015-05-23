$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).animate({
           height: '+=70px';
           width: '+=70px';
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=70px'

       }); 
   });
   $('div').click(function() {
       $(this).toggle(1000);
   }); 
});
