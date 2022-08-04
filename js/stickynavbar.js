/** Top Scroll Bar fixed position JavaScript Code **/

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("top-menu");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



/** JavaScript Code for the top navbar for active tabs **/

  $(function () {
        $(' .navmenu-inner li a,  .navmenu-outer li a ').each(function () {
            if ($(this).prop('href') == window.location.href) {
                $(this).addClass('active-custom-class');
            }
        });
    });
 






