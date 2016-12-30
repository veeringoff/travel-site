import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.siteHeader = $(".site-header");
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.events();
    }

    events() {
        /*  we must pass the 'this' pointer to the click function in this case since we want to affect
            MobileMenu rather than menuIcon. This is done with .bind(this).  You can pass anything there and
            it becomes 'this' - even a string. */
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x")
    }
}

export default MobileMenu;