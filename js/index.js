$(document).ready(function(n) {

  $(".gridSize").click(function() {

    var n = prompt("How big your grid will be? (Input a number between 20 and 100)");
    if (n < 20 || n > 100) {
      alert("That's not an option. Please input a number between 50 and 100.")
    } else {
      for (var x = 0; x <= n; x++) {
        for (var y = 0; y <= n; y++) {

          $('<div class="unit"></div>').appendTo("#container");

        }

        $("<br>").appendTo("#container");
      }
    }
    $(".unit").mouseover(function(){
    $(this).css("background-color", "#ffb51c");
  });
  });

  $(".gridReset").click(function() {
    $('#container div.unit, br').remove();
  });
  
  
});