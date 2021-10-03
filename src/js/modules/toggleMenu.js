function toggleMenu(selectorOpen, classActive, humburgerMenu) {
  selectorOpen.addEventListener('click', () => {
    humburgerMenu.classList.toggle(classActive);
  });
  document.documentElement.addEventListener('click', (e) => {
    if (e.target && e.target != humburgerMenu && e.target != selectorOpen && 
      e.target != selectorOpen.children[0]) {

      humburgerMenu.classList.remove(classActive);
      document.documentElement.style.overflow = 'auto';
    }
  });
  if (humburgerMenu.classList.contains(classActive)) {
    document.documentElement.style.overflow = 'hidden';
  } else {
    document.documentElement.style.overflow = 'auto';
  }
}


export default toggleMenu;