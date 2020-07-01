
/**
 * Here we define an IIFE (Immediate Function), the Window Object 
 * will passby parameter to receive an instance of Controller.js
 * 
 * @author Willian Felipe SantaAna <williansantaana@hotmail.com>
 * @author Felipe Gomes Silva <gsilvafelipe@hotmail.com>
 * @param {object} main - The window object represents an open window in a browser.
 */
(function(main){

    /**
     * The main object receives the instance of the {@link Controller} class.
     */
    main = new Controller();

}(window.main))
