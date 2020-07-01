
/**
 * This class is responsible for defining how the menu will be presented on the interface,
 * this format will depend on the type of device.
 * 
 * @author Willian Felipe SantaAna <williansantaana@hotmail.com>
 * @author Felipe Gomes Silva <gsilvafelipe@hotmail.com>
 */
class Menu {

    /**
     * Receives elements to be manipulated within the class.
     * 
     * @param {object} toggle - HTML element in object format
     * @param {object} navbar - HTML element in object format
     */
    constructor(toggle, navbar) {

        this._toggle = toggle;
        this._navbar = navbar;
        this.openedMenu = false;
        this.initialize();

    }

    /**
     * Initializes with the class, with a listener event for the toggle element.
     * <p>
     * The "click" calls the {@link openOrClose} method which will decide whether the menu will be opened or not.
     */
    initialize() {
        this._toggle.removeAttribute('style');
        this._toggle.addEventListener('click', ()=>{
            this.openOrClose();
        });
    }

    /**
     * Apply CSS style to the element received by parameter.
     * 
     * @param {object} style - Object with the CSS style that will be used by the method.
     */
    applyStyleNavbar(style){
        Object.keys(style).forEach(stl => {this._navbar.style[stl] = style[stl]});
    }

    /**
     * Checks whether the menu, in mobile mode, is open or closed. If it is open, it calls the method to close,
     * otherwise it calls the method to open.
     */
    openOrClose() {
        if(!this.openedMenu){
            this.openMenu();
        } else{
            this.closeMenu();
        }
    }
    
    /**
     * This method creates a CSS-style object that, when {@link applyStyleNavbar} by the aplystryle method,
     * will open the menu.
     */
    openMenu() {
        let top = this._navbar.getBoundingClientRect().top + 'px';
        let style = {
            maxHeight: 'calc(100vh - ' + top + ')',
            overflow: 'visible'
        }
        
        this.applyStyleNavbar(style);
        
        this.openedMenu = true;
    }

    /**
     * This method creates a CSS-style object that, when {@link applyStyleNavbar} by the aplystryle method,
     * will close the menu.
     */
    closeMenu() {
        let style = {
            maxHeight: '0px',
            overflow: 'hidden'
        }
        
        this.applyStyleNavbar(style);
        
        this.openedMenu = false;
    }

    /**
     * If the responsiveness changes and the maximum width is greater than 1024 pixels, this method will remove
     * the toggle from the DOM for the view to enter desktop mode.
     */
    removeToggle() {
        this._navbar.removeAttribute('style');
        this.openedMenu = true;
    }

}
