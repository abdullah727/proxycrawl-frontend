document
  .getElementById("main-img")
  .addEventListener("click", (e) => window.open(e.target.src));
document
  .getElementById("bg-img")
  .addEventListener("click", (e) => window.open(e.target.src));
setInterval(() => {
  const img = document.getElementById("bg-img");
  img.style.zIndex = img.style.zIndex == 1 ? -1 : 1;
}, 2000);
