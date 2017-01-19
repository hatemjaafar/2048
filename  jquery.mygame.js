(function($)
{
  $.fn.mygame=function(size)
    {
       var defaut=
      {
        size=0;
       };
       var parametres=$.extend(defaut, options);

       {
         gameObject=$(this).attr("id");
         console.log(gameObject);
         blockSize=size;
         boardSize=blockSize*4;
         ('body').append('<div id="board"></div>')
       });
    };
})(jQuery);
document.ready(function(){
  $("#jeux").mygame(6);
  });
