const menu = document.querySelector(".hamburger");
console.log(menu);

menu.addEventListener("click", () => {
  const menuBar = document.querySelector(".menu-nav-mobile");
  menuBar.classList.toggle("show");
  console.log(menuBar);
  menu.classList.toggle("active");
});
