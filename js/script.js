document.addEventListener("DOMContentLoaded", function () {
  var options = {
    fullWidth: false,
    duration: 400,
    dist: 0,
    padding: -100,
    numVisible: 5,
  };
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, options);
});
