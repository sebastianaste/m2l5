const targetScroll = document.getElementById("start")

function smoothScroll() {
  targetScroll.scrollIntoView({
    behavior: "smooth",
    block: "start", 
  });
}
function alertInfo() {
  alert("Imagen de Google Maps el año 2025");
}
