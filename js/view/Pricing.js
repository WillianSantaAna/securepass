
/**
 * This class is responsible for the price form.
 * 
 * @author Willian Felipe SantaAna <williansantaana@hotmail.com>
 * @author Felipe Gomes Silva <gsilvafelipe@hotmail.com>
 */
class Pricing {

    /**
     * Receives elements to be manipulated within the class.
     * 
     * @param {object} free - HTML element in object format
     * @param {object} premium - HTML element in object format
     * @param {object} families - HTML element in object format
     * @param {object} submit - HTML element in object format
     * @param {object} cancel - HTML element in object format
     * @param {object} popbg - HTML element in object format
     * @param {object} pop - HTML element in object format
     * @param {object} formTitle - HTML element in object format
     * @param {object} formDetails - HTML element in object format
     */
    constructor(free, premium, families, submit, cancel, popbg, pop, formTitle, formDetails) {
        this._free = free;
        this._premium = premium;
        this._families = families;
        this._submit = submit;
        this._cancel = cancel
        this._popbg = popbg;
        this._pop = pop;
        this._formTitle = formTitle;
        this._formDetails = formDetails;
    }

    /**
     * This method has several listening events, which depending on the element in the HTML that is clicked,
     * will display or hide the price form.
     */
    action() {
        
        let plan;
        let details;

        this._free.addEventListener('click', () => {
            plan = "Free Plan";
            details = "We will send you an email with the download informations as soon as possible.";
            this.showPopForm(plan, details);
        })

        this._premium.addEventListener('click', () => {
            plan = "Premium Plan";
            details = "We will send you an email with more information as soon as possible.";
            this.showPopForm(plan, details);
        })

        this._families.addEventListener('click', () => {
            plan = "Families Plan";
            details = "We will send you an email with more information as soon as possible.";
            this.showPopForm(plan, details);
        })

        this._submit.addEventListener('click', () => {
            let name = document.querySelector("#name");
            let email = document.querySelector("#email");

            if (name.value !== "" && email.value !== "" && email.value.includes("@")) {
                this.hidePopForm();
            }
        })

        this._cancel.addEventListener('click', () => {
            this.hidePopForm();
        })
    }

    /**
     * The method will change the CSS properties of the _popbg and _pop elements, making them visible.
     * This change will be made with a transition of 0.5 seconds, which has already been defined in the CSS.
     * <p>
     * The method receives two parameters, which are the plan chosen by the user and the description of the plan.
     * The values of these attributes received by parameter are to the DOM in the price form, using the native 
     * JavaScript property innerText.
     * 
     * @param {String} plan - 
     * @param {String} details - 
     */
    showPopForm(plan, details) {
        this._popbg.style.visibility = "visible";
        this._popbg.style.opacity = "1";
        this._pop.style.visibility = "visible";
        this._pop.style.opacity = "1";
        this._pop.style.top = "100px";

        this._formTitle.innerText = plan;
        this._formDetails.innerText = details;
    }

    /**
     * The method will change the CSS properties of the _popbg and _pop elements, making them hidden.
     * This change will be made with a 0.5 second transition, which has already been defined in the CSS.
     */
    hidePopForm() {
        this._popbg.style.visibility = "hidden";
        this._popbg.style.opacity = "0";
        this._pop.style.visibility = "hidden";
        this._pop.style.opacity = "0";
        this._pop.style.top = "250px";
    }

}
