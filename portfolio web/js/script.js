const navbar = document.querySelectorAll(".navbar-item");
const textNavbar = document.querySelectorAll(".navbar-text");

textNavbar.forEach((item) => {
  item.addEventListener("click", function () {
    textNavbar.forEach((navItem) => {
      navItem.style.backgroundColor = "transparent";
      navItem.style.color = "black";
    });
    this.style.backgroundColor = "black";
    this.style.color = "white";
    this.style.borderRadius = "999px";
  });
});

document.querySelector(".hamburger-menu").onclick = () => {
  document.querySelector(".navbar-list").classList.toggle("active");
};
