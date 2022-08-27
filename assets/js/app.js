// scrolling functionality
let counter = 1;
{
  function MenuSize() {
    var gutter = 9;
    var menu_width = 0;
    let menuItem = document.querySelectorAll(".menu-link");
    console.log(menuItem.length);
    var menu_gutter = (menuItem.length - 1) * gutter;
    console.log(menu_gutter);
    document.querySelectorAll(".menu-link").forEach(function (el) {
      menu_width += el.offsetWidth;
    });
    //document.querySelector("#menu .content").style.width = menu_gutter + "px";
  }

  MenuSize();

  window.addEventListener("resize", function () {
    MenuSize();
  });
}

// action on avatar clicks


// snackbar
{

  function myYelpop() {
    var x = document.getElementById("yelPop");
    x.className = "show";
    // close
  }
  
  function closeyesModal() {
    var x = document.getElementById("yelPop");
    x.className = x.className.replace("show", "");
  
  }


  function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  // close
}

function closeModal() {
  var x = document.getElementById("snackbar");
  x.className = x.className.replace("show", "");

}

function showGoModal () {
  var y = document.getElementById("yellowavatar");
  y.className = "show";
}
function closeGoModal () {
  var y = document.getElementById("yellowavatar");
  y.className = y.className.replace("show", "");
}
}
$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  $('.moreless-button').toggleClass('dv');
  if ($('.moreless-button').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});