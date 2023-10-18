const variableMap = {
    year: new Date().getFullYear()
};

document.addEventListener('DOMContentLoaded', () => {
    const lazyLoadedComponents = 'web-columns, web-columns-item, web-stories, web-content, web-youtube, web-contact';

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(({target, isIntersecting}) => {
            if (isIntersecting) {
                // Load component script if template is present
                const component = target.tagName.toLowerCase().replace('web-', '');
                const template = document.head.querySelector(`template[src*="${component}.js"]`);
                if (template) {
                    const script = document.createElement('script');
                    [...template.attributes].forEach( attr => { script.setAttribute(attr.nodeName ,attr.nodeValue) });
                    document.head.append(script);
                    template.remove();
                }

                // All scripts are loaded
                if (!document.head.querySelectorAll(`template[src*='columns'], template[src*='stories'], template[src*='contact'], template[src*='youtube']`).length) {
                    observer.disconnect();
                }
            }
        });
    });

    document.body.querySelectorAll(lazyLoadedComponents).forEach((component) => {
        observer.observe(component);
    });

    // Replace variables
    document.body.querySelectorAll('var').forEach((variable) => {
        const value = variableMap[variable.textContent];
        if (value) {
            variable.outerHTML = `<span>${value}</span>`
        }
    });

    const { pathname } = new URL(location.href);

    let oldPage = document.querySelector('header li a.current');
    let currentPage = document.querySelector(`header li a[href="${pathname}"]`);

    // Highlight current page in nav
    if (oldPage !== currentPage) {
        if (oldPage) {
            oldPage.classList.remove('current');
        }
        if (currentPage) {
            currentPage.classList.add('current');
        }
    }
});
