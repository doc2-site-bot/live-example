class YouTube extends HTMLElement {
    constructor() {
        super();

        const src = new URL(this.getAttribute('source'));
        this._id = src.searchParams.get('v');

        const img = this.shadowRoot?.querySelector('img');
        if (img) {
            img.src = `https://i.ytimg.com/vi/${this._id}/hqdefault.jpg`;
        }

        this.onclick = () => {
            if (!this._loadYT) {
                this._loadYT = true;

                const iframe = this.shadowRoot?.querySelector('iframe');
                if (iframe) {
                    iframe.src = `https://www.youtube.com/embed/${this._id}?autoplay=1`;
                }

                const preview = this.shadowRoot?.querySelector('.preview');
                if (preview) {
                    preview.remove();
                }
            }
        }
    }
}

customElements.define('web-youtube', YouTube);
