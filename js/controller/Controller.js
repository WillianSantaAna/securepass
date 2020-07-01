
/**
 * Class responsible for controlling data and objects manipulated in the DOM.
 * 
 * @author Willian Felipe SantaAna <williansantaana@hotmail.com>
 * @author Felipe Gomes Silva <gsilvafelipe@hotmail.com>
 */
class Controller {

    /**
     * Initializes the methods that will create instances with the view classes.
     */
    constructor() {

        this.initPreloader();
        this.initNavbar();
        this.initScroll();
        this.initPricing();

    }

    /**
     * Initializes the preloader as soon as the page is loaded.
     */
    initPreloader() {
        let loader = document.querySelector("#preloader");
        let preloader = new Preloader(loader);

        window.addEventListener('load', () => {
            preloader.fadeOutEffect();
        });
    }

    /**
     * Instantiate the {@link Menu} class, the method has a listener event for when the width size changes.
     * <p>
     * Whenever the maximum view width is less than 1024 pixels, the conventional option for the 
     * desktop mode is removed and replaced by a toggle button, according to the responsiveness.
     */
    initNavbar() {
        let toggle = document.querySelector("#toggle");
        let navbar = document.querySelector("#navbar");
        
        let menu =  new Menu(toggle, navbar);

        window.addEventListener('resize', () => {
            if(window.innerWidth > 1024){
                menu.removeToggle();
            } else if(!navbar.getAttribute('style')){
                menu.closeMenu();
            }
        })
        
        if(window.innerWidth <= 1024){
            menu.closeMenu();
        }
    }

    /**
     * This method instantiates the {@link Scroll} class.
     */
    initScroll() {
        let scrollButton = document.querySelector("#scrollUp");
        let scroll = new Scroll(scrollButton);

        window.onscroll = () => {
            scroll.showButtonScroll();
        };
    }

    /**
     * This method instantiates the {@link Pricing} class, if it exists in the scope.
     */
    initPricing() {

        if (typeof Pricing !== 'undefined') {

            let free = document.querySelector("#free");
            let premium = document.querySelector("#premium");
            let families = document.querySelector("#families");
            let submit = document.querySelector("#submit_pop");
            let cancel = document.querySelector("#cancel");
            let popbg = document.querySelector("#pop_bg");
            let pop = document.querySelector("#pop");
            let formTitle = document.querySelector("#form-title");
            let formDetails = document.querySelector("#form-details");

            let pricing = new Pricing(free, premium, families, submit, cancel, popbg, pop, formTitle, formDetails);

            pricing.action();
            
        }

    }

}
