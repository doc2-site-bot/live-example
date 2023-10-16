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

    const { pathname } = new URL(location.href);

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
