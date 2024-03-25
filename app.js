(function() {
  "use strict";
  const poster = document.getElementById("poster");
  const img = document.createElement("img");
  const footer = document.querySelector("footer");
  img.style.visibility = "hidden";
  img.src = "https://mwcdn.co/www.kellershoff.net/poster.jpg";
  img.onload = function() {
    poster.style.backgroundImage = "url(" + this.src + ")";
    poster.style.opacity = 1;
    this.parentNode.removeChild(this);
    footer.style.opacity = 1;
  };
  document.body.appendChild(img);
})();