(function () {
  document.documentElement.classList.add("js");
  var levels = document.querySelectorAll(".level");
  var xp = document.getElementById("xp");
  var count = document.getElementById("cleared");
  var total = levels.length;

  function update() {
    var n = document.querySelectorAll(".level.cleared").length;
    count.textContent = n;
    xp.style.width = (n / total) * 100 + "%";
  }

  levels.forEach(function (li) {
    var d = li.querySelector("details");
    d.addEventListener("toggle", function () {
      if (d.open) { li.classList.add("cleared"); update(); }
    });
  });

  // reveal on scroll; content is already in the HTML, this only animates it
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    levels.forEach(function (l) { io.observe(l); });
  } else {
    levels.forEach(function (l) { l.classList.add("in"); });
  }
})();
