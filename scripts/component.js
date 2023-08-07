// Source: https://developer.chrome.com/en/articles/declarative-shadow-dom/
export default class Component extends HTMLElement {
    constructor() {
        super();

        this.querySelectorAll("template[shadowrootmode]").forEach(template => {
            const shadowRoot = this.shadowRoot || this.attachShadow({ mode: "open" });
            shadowRoot.appendChild(template.content);
            template.remove();
        });
    }
}
