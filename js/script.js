window.addEventListener("load", initSchedule);
elem = document.querySelector(".tabs");
options = {};
function initSchedule() {
  console.log(window.innerHeight);
  if (window.innerWidth < 993) {
    instance = M.Tabs.init(elem, options);
  }
  window.onresize = reportWindowSize;
}

function reportWindowSize() {
  if (window.innerWidth > 993) {
    if (instance._indicator.parentNode != null) {
      instance.destroy();
    }
  } else {
    instance = M.Tabs.init(elem, options);
  }
}
