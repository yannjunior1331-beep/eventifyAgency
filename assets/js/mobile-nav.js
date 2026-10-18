/**
 * Universal Mobile Navigation Controller for Eventify Agency
 * Ensures reliable opening/closing of the full-screen mobile menu on all devices.
 */
document.addEventListener('DOMContentLoaded', function () {
  function initMobileNav() {
    const icons = document.querySelectorAll('.icon2, .icon-12');
    const menus = document.querySelectorAll('.menu');
    const closeButtons = document.querySelectorAll('.image-24');

    icons.forEach(function (icon) {
      icon.style.cursor = 'pointer';
      icon.addEventListener('click', function (e) {
        menus.forEach(function (menu) {
          menu.style.setProperty('display', 'flex', 'important');
          menu.style.setProperty('opacity', '1', 'important');
          menu.style.setProperty('visibility', 'visible', 'important');
        });
      });
    });

    closeButtons.forEach(function (btn) {
      btn.style.cursor = 'pointer';
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        menus.forEach(function (menu) {
          menu.style.setProperty('display', 'none', 'important');
        });
      });
    });
  }

  initMobileNav();
});
