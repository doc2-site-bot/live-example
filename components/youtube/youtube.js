class YouTube extends HTMLElement {
    constructor() {
        super();

        const { searchParams } = new URL(this.getAttribute('source'));
        const id = searchParams.get('v');

        const img = this.querySelector('img');
        img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

        this.addEventListener('click', () => {
            const iframe = this.querySelector('iframe');
            iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;

            const preview = this.querySelector('div');
            preview.remove();
        }, { once: true});
    }
}

customElements.define('web-youtube', YouTube);
