document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll("img");

  images.forEach(img => {
    img.addEventListener("error", function() {
      if (img.src.includes("cdn.jsdelivr.net")) {
        img.src = img.src.replace("cdn.jsdelivr.net", "fastly.jsdelivr.net");
      }
    });
  });
});
