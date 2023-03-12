class YouTube extends HTMLElement {
    constructor() {
        super();

        const src = new URL(this.getAttribute('source'));
        this._id = src.searchParams.get('v');
    }

    connectedCallback() {
        this.innerHTML = `<iframe width="680" height="400" src="https://www.youtube.com/embed/${this._id}"></iframe>`;
    }
}

customElements.define('web-youtube', YouTube);