// Source: https://developer.chrome.com/en/articles/declarative-shadow-dom/
export default class Component extends HTMLElement {
    constructor() {
        super();

        this.querySelectorAll("template[shadowrootmode]").forEach(template => {
            const mode = template.getAttribute("shadowrootmode");
            const shadowRoot = template.parentNode.attachShadow({ mode });
            shadowRoot.appendChild(template.content);
            template.remove();
        });
    }
}
