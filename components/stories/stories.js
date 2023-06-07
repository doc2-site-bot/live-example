class Stories extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.querySelectorAll('a[href]').forEach((a) => {
           const {searchParams} = new URL(a.getAttribute('href'));
           const path = searchParams.get('path');
           if (path) {
               a.href = searchParams.get('path');
           }
        });
    }
}

window.customElements.define('web-stories', Stories);
