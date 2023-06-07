const variableMap = {
    year: new Date().getFullYear()
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('var').forEach((variable) => {
        const value = variableMap[variable.textContent];
        if (value) {
            variable.outerHTML = `<span>${value}</span>`
        }
    });

    const {pathname} = new URL(location.href);

    if (pathname === '/') {
        const script = document.createElement('script');
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onloadTurnstileCallback';
        document.head.append(script);
    }

    let oldPage = document.querySelector('header li a.current');
    let currentPage = document.querySelector(`header li a[href="${pathname}"]`);

    if (oldPage !== currentPage) {
        if (oldPage) {
            oldPage.classList.remove('current');
        }
        if (currentPage) {
            currentPage.classList.add('current');
        }
    }
});
