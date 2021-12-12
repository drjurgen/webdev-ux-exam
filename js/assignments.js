window.addEventListener("DOMContentLoaded", initAssignments);
const elem = document.querySelector(".carousel");
const options = {
  fullWidth: false,
  duration: 400,
  dist: 0,
  padding: -100,
  numVisible: 5,
};
let instance;
function initAssignments() {
  if (window.innerWidth < 2000) {
    instance = M.Carousel.init(elem, options);
  }
  window.onresize = reportWindowSize;
}

function reportWindowSize() {
  console.log(instance);

  if (window.innerWidth > 993) {
    if (instance != undefined) {
      instance.destroy();
    }
  } else {
    instance = M.Carousel.init(elem, options);
  }
}
