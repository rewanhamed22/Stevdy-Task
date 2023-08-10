const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.addEventListener("click", () => {
  dropDownMenu.classList.toggle("open");
  console.log("object");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : " fa-solid fa-bars";
});
