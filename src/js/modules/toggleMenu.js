function toggleMenu(selectorOpen, classActive, humburgerMenu) {
  selectorOpen.addEventListener('click', () => {
    humburgerMenu.classList.toggle(classActive);
    if (humburgerMenu.classList.contains(classActive)) {
        document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
      
  });
  document.documentElement.addEventListener('click', (e) => {
    if (e.target && e.target != humburgerMenu && e.target != selectorOpen && 
      e.target != selectorOpen.children[0] && humburgerMenu.classList.contains(classActive)) {

      humburgerMenu.classList.remove(classActive);
      document.documentElement.style.overflow = 'auto';

    } 
    
  });
  
}


export default toggleMenu;