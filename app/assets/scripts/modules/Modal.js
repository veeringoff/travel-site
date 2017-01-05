import $ from 'jquery';

class Modal {
    constructor() {
                alert("Modal");

        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");
        this.events();
    }

    events() {

        alert("events");


        // clicking the open modal button
        this.openModalButton.click(this.openModal.bind(this)); // bind sets the value of 'this'
        // clicking the x close modal button
        this.closeModalButton.click(this.closeModal.bind(this));
        // pushes any key
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) { 
            this.closeModal();
        }

    }

    openModal() {
        this.modal.addClass("modal--is-visible");
        alert("openModal");
        return false; // dosn't scroll to the top of the page!
    }

    closeModal() {
        alert("closeModal");
        this.modal.removeClass("modal--is-visible");
    }
}

export default Modal;