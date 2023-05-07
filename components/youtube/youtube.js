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

                this.innerHTML = `<iframe width="680" height="400" src="https://www.youtube.com/embed/${this._id}?autoplay=1" allow="autoplay"></iframe>`;
            }
        }
    }

    // connectedCallback() {
    //     this.innerHTML = `
    //         <div>
    //             <img alt="doc2.site video preview" src="https://i.ytimg.com/vi/${this._id}/hqdefault.jpg"/>
    //             <button aria-label="Play">
    //                 <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
    //                     <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path>
    //                 </svg>
    //             </button>
    //         </div>`;
    // }
}

customElements.define('web-youtube', YouTube);
