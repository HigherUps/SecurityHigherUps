function safe() {
    window.location = "https://www.thehigherups.org/?savedBy=thehigherups_securityprotocol&isMember=no&huaspVersion=zerozerozeroone"
}
function createModal() {
    const cont = document.createElement('div')
    const innerCont = document.createElement('div')
    const header = document.createElement('h1')
    const text = document.createElement('p')
    const button = document.createElement('button')
    const span = document.createElement('span')
    header.innerText = "Are You Sure You Want To Continue To"
    text.innerText = new URLSearchParams(window.location.search).get('site')
    button.innerText = "Yes, I'm Sure"
    span.innerText = 'close'
    span.setAttribute("class", "material-icons closeModal")
    span.setAttribute("onclick", "removeModal()")
    button.setAttribute("onclick", "goToSite()")
    innerCont.setAttribute("class", "button")
    cont.appendChild(span)
    text.setAttribute("class", "site")
    cont.classList.add('modal')
    cont.appendChild(innerCont)
    innerCont.appendChild(header)
    innerCont.appendChild(text)
    innerCont.appendChild(button)
    document.body.appendChild(cont)
}0
function removeModal() {
    document.querySelector('.modal').remove()
}
function goToSite() {
    var urlParams = new URLSearchParams(window.location.search);
    var site = urlParams.get('site');
    window.location = site
}