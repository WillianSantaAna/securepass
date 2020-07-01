
/**
 * The class is responsible for the operation of the "Scroll To Up" button.
 * 
 * @author Willian Felipe SantaAna <williansantaana@hotmail.com>
 * @author Felipe Gomes Silva <gsilvafelipe@hotmail.com>
 */
class Scroll {

    /**
     * Receives elements to be manipulated within the class.
     * 
     * @param {object} scrollButton - HTML element in object format
     */
    constructor(scrollButton) {

        this._scrollButton = scrollButton;
        this._currentYOffset;
        this._initYOffset;
        this.initialize();

    }

    /**
     * The method is initialized together with the class, and has a "click" listener event to call
     * the scrollUp method.
     */
    initialize() {
        this._scrollButton.addEventListener('click', () => {
            this.scrollUp();
        });
    }

    /**
     * When the page is scrolled down, the "Scroll To Up" button will appear.
     * <p>
     * The method checks if the position on the y-axis of the scroll is greater than 100, if it is the
     * button it will be mounted.
     */
    showButtonScroll() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            this._scrollButton.style.display = "block";
        } else {
            this._scrollButton.style.display = "none";
        }
    }

    /**
     * The method is responsible for scrolling the page to the top.
     * <p>
     * The 20 millisecond interval method takes the document's current position on the y-axis and multiplies
     * it by 0.05, this small value is subtracted from the document's position. This causes the page to
     * scroll smoothly to the top.
     */
    scrollUp() {
        this._currentYOffset = self.pageYOffset;
        this._initYOffset = this._currentYOffset;

        let intervalId = setInterval(() => {
            this._currentYOffset -= this._initYOffset * 0.05;
            document.body.scrollTop = this._currentYOffset;
            document.documentElement.scrollTop = this._currentYOffset;

            if (self.pageYOffset == 0) {
                clearInterval(intervalId);
            }
        }, 20);
    }

}
