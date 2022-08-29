function openMenu() {
  const menuOverlay = document.getElementById("menu_overlay");
  menuOverlay.classList.add("menu__overlay_open");
}

function initOpenMenuListener() {
  document.getElementById("mobile_menu_icon").addEventListener("click", openMenu);
}

function closeMenu() {
  const menuOverlay = document.getElementById("menu_overlay");
  menuOverlay.classList.remove("menu__overlay_open");
}

function initCloseMenuListener() {
  document.getElementById("mobile_close_icon").addEventListener("click", closeMenu);
}



document.addEventListener("DOMContentLoaded", () => {
  initOpenMenuListener();
  initCloseMenuListener();
})