activatehome = document.getElementById('activateHome')
activatehome.onclick = function () {
    datadiv = document.getElementById('datadiv')
    datadiv.innerHTML = ''

    title = document.createElement('h1')
    title.innerHTML = "Hello there"

    datadiv.appendChild(title)
}
