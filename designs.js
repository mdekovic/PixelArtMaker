// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function cSwap(e){ 
e.preventDefault();
const paint = $('#colorPicker').val();
 var rightMouseButton;
if (e.button == 2) {
      rightMouseButton = true;
	  $("td").contextmenu(function() {
          return false;
        });
      $(this).css("background-color", "#FFFFFF");
    } else {
      $(this).css("background-color", paint);
    }
}

function makeGrid(e) {
  // Your code goes here!

  e.preventDefault();

  $('td').remove();
  $('tr').remove();

  const h = $('#input_height').val();
  const w = $('#input_width').val();

  for (let i = 0; i < h; i++) {
    $("#pixel_canvas").append("<tr></tr>");
  }
  for (let j = 0; j < w; j++) {
    $("tr").each(function() {
      $(this).append("<td></td>");
    });
  }

  $("td").each(function() {
    $(this).mousedown(cSwap);
  });
}

$('#sizePicker').submit(makeGrid);
