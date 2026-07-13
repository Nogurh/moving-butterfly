document.querySelectorAll('.butterfly').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    el.style.left = "200px";
  });
});