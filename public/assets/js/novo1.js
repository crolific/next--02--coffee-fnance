$(function () {
  // Single Page Nav
  $("#navbarResponsive").singlePageNav({
    offset: 100,
    filter: ":not(.external)",
  });

  // On mobile, close the menu after nav-link click
  $("#navbarResponsive .navbar-nav .nav-item .nav-link").click(function () {
    $("#navbarResponsive").removeClass("show");
  });
});

cleared[0] = cleared[1] = cleared[2] = 0; //set a cleared flag for each field
function clearField(t) {
  //declaring the array outside of the
  if (!cleared[t.id]) {
    // function makes it static and global
    cleared[t.id] = 1; // you could use true and false, but that's more typing
    t.value = ""; // with more chance of typos
    t.style.color = "#fff";
  }
}
