(function($)
{
  $.fn.mygame = function(size)
  {
    //initialisation des variables
    var defaultsize = { "size":500 };
    var parametres = $.extend(defaultsize, size);
    var gameObject = $(this).attr("id");
    var blockSize = parametres.size;
    var boardSize = blockSize*4;
    //creation de la premiere DIV board qui va englober toute les squares
    $(this).append('<div id="board"> </div>');
    $("#board").height(boardSize);
    $("#board").width(boardSize);
    $("#board").css("background-color", "blue");
    $("#board").css("border-width", "10px");

    //boucle pour la creation des square!
    var counter = 0; //counter pour identifier mes square!
    for(var i = 0;i<4;i++)
    {
      for(var j = 0;j<4;j++)
      {
        counter = counter+1;
        $('#board').append('<div class = " square-container " id ='+counter+'  data-row ="'+i+'" data-col ="'+j+' "></div>');

        var id_cell = counter + "";
        $('#'+id_cell).height(parametres.size-4);
        $('#'+id_cell).width(parametres.size-4);
      }
      $('#board').append('<div style = "clear:both"></div>');
    }
    return this;
  };
})(jQuery);


$(document).ready(function(){
  $("#jeux").mygame({size:60});
});

$(document).ready(function(){
  $("#begin").click(function(){
    for (var i=1;i<17;i++)
    {
      $('#'+i).text("");
      $('#'+i).removeClass("selected");

    }
    newNumber();
    newNumber();
  });
});


//fonction qui me permet d'ajouter un tile sur ma map
function newNumber()
{
  var tab=[]
  var tab2=["2","4"];
  for (i=1;i<17;i++)
  {
    if ($('#'+i).text() == "")
    {
      tab.push(i);
    }
  }

  var rand_case = tab[Math.floor(Math.random() * tab.length)];
  var rand_value = tab2[Math.floor(Math.random() * tab2.length)];

  if ((tab.length) > 0 )
  {
    $('#'+rand_case).text(+rand_value);
    $('#'+rand_case).addClass("selected");
  }
}

$(document).ready(function () {
  $(document).keydown(function (e) {

    if(e.keyCode == '38')
    {
      moveUp();
    }
    if(e.keyCode == '40')
    {
      moveDown()
    }
    if(e.keyCode == '37')
    {
      moveLeft()
    }
    if(e.keyCode == '39')
    {
      moveRight()
    }

  });
});


function moveUp(executed = false)

{
  for (i=1; i< 17; i++)
  {
    for(j=1; j<17; j++)
    {
      k=j+4;
      if (($('#'+j).text() == "") && ($('#'+k).text() != ""))
      {
        $('#'+j).text($('#'+k).text()) ;
        $('#'+k).text("") ;
        $('#'+k).removeClass("selected");
        $('#'+j).addClass("selected");

      }
    }
  }

  if(executed == false )
  {
    moveUp_add();
    newNumber();
  }
}



//Fonction qui s'execute au momment ou l'utilisateur clique sur la fleche du bas
function moveDown(executed = false)
{
  for (i = 16; i > 0; i--)
  {
    for(j = 16; j > 0; j--)
    {
      k = j-4;
      if (($('#'+j).text() == "") && ($('#'+k).text() != ""))
      {
        $('#'+j).text($('#'+k).text()) ;
        $('#'+k).text("") ;
        $('#'+k).removeClass("selected");
        $('#'+j).addClass("selected");

      }
    }
  }

  // test pour verifier que j'execute une seule fois la fonction add!
  if(executed == false )
  {
    moveDown_add();
    newNumber();
  }

}


function moveRight(executed = false)
{
  for (i = 1 ; i < 17; i++){
    for(j = 1;j < 17; j++){
      k = j+1;
      if ( (j != 4 ) && (j != 8 ) && (j != 12 ) && ( j != 16) )
      {
        if (($('#'+k).text() == "") && ($('#'+j).text() != ""))
        {
          console.log("boucle du right");
          $('#'+k).text($('#'+j).text()) ;
          $('#'+j).text("") ;
          $('#'+j).removeClass("selected");
          $('#'+k).addClass("selected");
        }

      }
    }
  }
  if(executed == false )
  {
    moveRight_add();
    newNumber();
  }

}


function moveLeft(executed = false)
{
  for (i = 1; i<17; i++){
    for(j = 1; j<17; j++){
      k = j+1;
      if ( (j != 4 ) && (j != 8 ) && (j != 12 ) && ( j != 16) )
      {
        if (($('#'+j).text() == "") && ($('#'+k).text() != ""))
        {
          console.log("boucle du right");
          $('#'+j).text($('#'+k).text()) ;
          $('#'+k).text("") ;
          $('#'+k).removeClass("selected");
          $('#'+j).addClass("selected");
        }
      }
    }
  }
  if(executed == false )
  {
    moveLeft_add();
    newNumber();
  }

}


//Fonction moveDown_add permet de faire l'addition des colonnes quand je joueur clique sur la fleche du bas!
function moveDown_add()
{
  for ( i = 16; i>0; i--)
  {
    k = i-4;
    if (($('#'+i).text() != "") && ($('#'+k).text() == ($('#'+i).text())))
    {

      $('#'+i).text($('#'+k).text()*2) ;
      $('#'+k).text("") ;
      $('#'+k).removeClass("selected");
      $('#'+j).addClass("selected");

      $('#son')[0].play();

    }
  }

  moveDown(true);
}

function moveUp_add()
{
  for (i = 1;i<17;i++)
  {
    k = i+4;
    if (($('#'+i).text() != "") && ($('#'+k).text() == ($('#'+i).text())))
    {

      $('#'+i).text($('#'+k).text()*2) ;
      $('#'+k).text("") ;
      $('#'+k).removeClass("selected");
      $('#son')[0].play();
    }
  }

  moveUp(true);
}

function moveLeft_add()
{
  for (j = 1; j < 17; j++)
  {
    k = j+1;
    if ( (j != 4 ) && (j != 8 ) && (j != 12 ) && ( j != 16) )

    if (($('#'+j).text() != "") && ($('#'+k).text() == ($('#'+j).text())))
    {

      $('#'+j).text($('#'+k).text()*2) ;
      $('#'+k).text("") ;
      $('#'+k).removeClass("selected");
      $('#'+j).addClass("selected");
      $('#son')[0].play();

    }
  }

  moveLeft(true);
}
function moveRight_add()
{
  for (j = 1;j<17;j++)
  {
    k = j+1;
    if ( (j != 4 ) && (j != 8 ) && (j != 12 ) && ( j != 16) )

    if (($('#'+j).text() != "") && ($('#'+k).text() == ($('#'+j).text())))
    {
      $('#'+k).text($('#'+j).text()*2) ;
      $('#'+j).text("") ;
      $('#'+j).removeClass("selected");
      $('#'+k).addClass("selected");
      $('#son')[0].play();
    }
  }
  moveRight(true);
}
