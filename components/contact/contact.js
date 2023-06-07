class Contact extends HTMLElement {
    constructor() {
        super();

        const [spreadsheetId, sheetId] = this.getAttribute('file').split('/').slice(-2);

        const form = this.shadowRoot.querySelector('form');
        const button = form.querySelector('button');

        form.onsubmit = async (event) => {
            event.preventDefault();

            button.disabled = true;

            const formData = new FormData(form);
            const req = await fetch(`https://api.doc2.site/v1/spreadsheets/${spreadsheetId}/${sheetId}`, {
                headers: {
                    'content-type': 'application/json'
                },
                method: 'PATCH',
                body: JSON.stringify({
                  'cf-turnstile-response': formData.get('cf-turnstile-response'),
                  operation: 'append',
                  rows: [{
                      name: formData.get('name'),
                      body: formData.get('body'),
                      date: new Date().toISOString()
                  }]
                }),
            });

            if (req.ok) {
                form.querySelector('div:last-of-type').hidden = false;
            }
            else {
                button.disabled = false;
            }
        }

        window.onloadTurnstileCallback = function () {
            window.turnstile.render('.cf-turnstile', {
                callback: function(token) {
                    form.insertAdjacentHTML('beforeend', `<input type="hidden" name="cf-turnstile-response" value="${token}"/>`);
                },
            });
        };
    }
}

window.customElements.define('web-contact', Contact);