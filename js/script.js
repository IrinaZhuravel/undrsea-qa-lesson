document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.querySelector(".burger-icon");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeIcon = document.querySelector(".close-icon");
  const submit = document.querySelector("#submit");
  // Открытие мобильного меню
  burgerIcon.addEventListener("click", function () {
    mobileMenu.style.display = "flex";
  });

  // Закрытие мобильного меню
  closeIcon.addEventListener("click", function () {
    mobileMenu.style.display = "none";
  });
  submit.addEventListener("click", function () {
    alert("Тип отправили в базу");
  });
});
