function modal({selectorButtons, selectorOverlay, selectorModalWindow}) {
    const btns = document.querySelectorAll(selectorButtons),
          overlay = document.querySelector(selectorOverlay),
          modalWindow = document.querySelector(selectorModalWindow); 

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            overlay.style.display = 'block';
            document.documentElement.style.overflow = "hidden";
        });
    });
    console.log(modalWindow.children);
    overlay.addEventListener('click', (e) => {
        if (e.target && e.target != modalWindow && e.target.localName != 'h2' &&
                e.target.localName != 'form' && e.target.localName != 'button' &&
                e.target.localName != 'input') {

            overlay.style.display = 'none';
            document.documentElement.style.overflow = 'auto';
        }
    });
}
export default modal;