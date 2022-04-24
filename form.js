const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const succ = document.querySelector('.succ');
    e.preventDefault()
    form.reset()
    succ.removeAttribute("hidden")
    setTimeout(() => {
        succ.setAttribute("hidden", "")
        window.location = "//www.google.com"
    }, 3000)
});