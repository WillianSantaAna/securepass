
/**
 * Class responsible for displaying the preloader.
 * 
 * @author Willian Felipe SantaAna <williansantaana@hotmail.com>
 * @author Felipe Gomes Silva <gsilvafelipe@hotmail.com>
 */
class Preloader {

    /**
     * Receives elements to be manipulated within the class.
     * 
     * @param {object} loader - HTML element in object format
     */
    constructor(loader) {
        this._loader = loader;
    }

    /**
     * The method is responsible for the effect of fade out from the preloader.
     */
    fadeOutEffect() {
        setInterval(() => {
            this._loader.classList.add('hide');
        }, 500);

        setInterval(() => {
            this._loader.remove();
        }, 1000);
    }

}
