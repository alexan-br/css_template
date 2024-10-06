const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= window.innerHeight) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
