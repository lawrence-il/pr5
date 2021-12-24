function toggleMenu (menuBtnClass, menuClass, classActive, menuClassChildren) {

  const humburgerMenu = document.querySelector(menuClass);

  document.addEventListener('click', e => {
    if (e.target && (e.target.classList.contains(menuBtnClass.slice(1)) || 
		e.target.classList.contains(menuClassChildren.slice(1)))) {

            humburgerMenu.classList.toggle(classActive.slice(1));
            if (humburgerMenu.classList.contains(classActive.slice(1))) {
                document.documentElement.style.overflow = 'hidden';
            } else {
                document.documentElement.style.overflow = 'auto';
            }
			
    } else if (e.target && humburgerMenu.classList.contains(classActive.slice(1)) && !e.target.classList.contains(menuClass.slice(1))) {
            humburgerMenu.classList.remove(classActive.match(/[^\.]+/));
            document.documentElement.style.overflow = 'auto';
    }
  })
}


export default toggleMenu;